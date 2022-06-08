const cookieSession = require("cookie-session");
const express = require("express");
const dotenv = require("dotenv")
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");

const app = express();
const jwt = require("jsonwebtoken");

dotenv.config();
app.use(express.json());

app.use(
    cors({
        origin: "https://client-binar-car-rental.herokuapp.com",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.set("trust proxy", 1);

app.use(cookieSession({ name: "session", keys: ["lama"], secure: true, maxAge: 24 * 60 * 60 * 1000 }));

app.use(passport.initialize());
app.use(passport.session());


app.use("/auth", authRoute);

// JWT
const users = [{
        id: "1",
        email: "diyah@gmail.com",
        password: "123123",
        isAdmin: true,
    },
    {
        id: "2",
        email: "userdiyah@gmail.com",
        password: "121212",
        isAdmin: false,
    },
];

let refreshTokens = [];

app.post("/api/refresh", (req, res) => {
    //take the refresh token from the user
    const refreshToken = req.body.token;

    //send error if there is no token or it's invalid
    if (!refreshToken) return res.status(401).json("You are not authenticated!");
    if (!refreshTokens.includes(refreshToken)) {
        return res.status(403).json("Refresh token is not valid!");
    }
    jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
        err && console.log(err);
        refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        refreshTokens.push(newRefreshToken);

        res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        });
    });

    //if everything is ok, create new access token, refresh token and send to user
});

const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "mySecretKey", {
        expiresIn: "100m",
    });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "myRefreshSecretKey");
};

app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find((u) => {
        return u.email === email && u.password === password;
    });
    if (user) {
        //Generate an access token
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        refreshTokens.push(refreshToken);
        res.json({
            email: user.email,
            isAdmin: user.isAdmin,
            accessToken,
            refreshToken,
        });
    } else {
        res.status(400).json([
            { email,password}, {err : "user invalid"}
        ]);
    }
});



const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, "mySecretKey", (err, user) => {
            if (err) {
                return res.status(403).json("Token is not valid!");
            }

            req.user = user;
            next();
        });
    } else {
        res.status(401).json("You are not authenticated!");
    }
};

app.delete("/api/users/:userId", verify, (req, res) => {
    if (req.user.id === req.params.userId || req.user.isAdmin) {
        res.status(200).json("User has been deleted.");
    } else {
        res.status(403).json("You are not allowed to delete this user!");
    }
});

app.post("/api/logout", verify, (req, res) => {
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    res.status(200).json("You logged out successfully.");
});



app.get('/', (req,res)=>{
    res.send('app backend is running')
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is running on port 5000");
});
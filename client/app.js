const express = require('express');
const app = express();

const path = require('path')

if (process.env.NODE_ENV === "production") {
    app.use(express.static('build'));

    app.get("*", function(req, res) {
        res.sendFile(path.resolve(__dirname, "build", "index.html"));
    });
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server clent is running on port 3000");
});
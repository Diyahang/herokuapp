import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import imgLogin from "../images/login.png";
import { BsGoogle, BsFacebook, BsGithub } from "react-icons/bs";
import { AppContext } from "../contexts/app-context";

function Login() {
  const context = useContext(AppContext);

  const google = () => {
    window.open("https://backend-binar-car-rental.herokuapp.com/auth/google", "_self");
  };
  const github = () => {
    window.open("https://backend-binar-car-rental.herokuapp.com/auth/github", "_self");
  };
  const facebook = () => {
    window.open("https://backend-binar-car-rental.herokuapp.com/auth/facebook", "_self");
  };

  return (
    <div className="Login" style={{ display: "flex" }}>
      <Box
        component="img"
        sx={{
          display: "flex",
          width: "61%",
        }}
        alt="Car Rental"
        src={imgLogin}
      />
      <div className="form" style={{ padding: "3rem" }}>
        <Box sx={{ mt: "4rem" }}>
          <h1 style={{ fontSize: "30px", fontWeight: "bolder" }}>Welcome, Admin BCR</h1>
        </Box>

        <TextField fullWidth sx={{ mb: "1rem" }} id="outlined-basic" label="Email" variant="outlined" onChange={(e) => context.setEmail(e.target.value)} />

        <TextField fullWidth sx={{ mb: "1rem" }} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" onChange={(e) => context.setPassword(e.target.value)} />

        <Button href={`/dashboard`} sx={{ fontWeight: "bold", color: "white", backgroundColor: "#0D28A6", height: "3rem", mb: 2, "&:hover": { background: "#0D28A6" } }} fullWidth variant="contained" onClick={context.handleClick}>
          Sign In
        </Button>
        <Box sx={{ mt: "1rem" }}>
          <h5 style={{ fontSize: "18px" }}>Login with : </h5>
        </Box>
        {/* <Button onClick={facebook} sx={{ fontWeight: "bold", display: "flex", color: "white", backgroundColor: "#507cc0", height: "3rem", mb: 1, "&:hover": { background: "#507cc0" } }} fullWidth variant="contained">
          <BsFacebook style={{ marginRight: "10px" }} />
          Facebook
        </Button> */}
        <Button onClick={google} sx={{ fontWeight: "bold", display: "flex", color: "white", backgroundColor: "#df4930", height: "3rem", mb: 1, "&:hover": { background: "#df4930" } }} fullWidth variant="contained">
          <BsGoogle style={{ marginRight: "10px" }} />
          Google
        </Button>
        <Button onClick={github} sx={{ fontWeight: "bold", display: "flex", color: "white", backgroundColor: "black", height: "3rem", mb: 2, "&:hover": { background: "black" } }} fullWidth variant="contained">
          <BsGithub style={{ marginRight: "10px" }} />
          Github
        </Button>
      </div>
    </div>
  );
}

export default Login;

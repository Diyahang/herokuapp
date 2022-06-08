import "./navbar.scss";
import logos from "../../../images/logos.png";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useState, useContext } from "react";
import { AppContext } from "../../../contexts/app-context";

const Navbar = () => {
  const context = useContext(AppContext);
  const [user, setUser] = useState(null);

  const logout = () => {
    window.open("https://backend-binar-car-rental.herokuapp.com/auth/logout", "_self");
  };
  return (
    <div className="navbar nav shadow-sm  fixed">
      <div className="left">
        <div className="logos">
          <a href="/dashboard">
            <img src={logos} alt="logo" />
          </a>
        </div>
        <div className="menu">
          <button id="search-button" type="button" class="btn ms-5">
            <MenuOutlinedIcon />
          </button>
        </div>
      </div>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items"></div>
        <Avatar
          // {context.email == "diyah@gmail.com" ? logo : context.user.photos[0].value} alt="" className="avatar" />
          sx={{ mr: 1 }}
        />
        <Typography variant="p" sx={{ mr: 2 }}>
          Diyah Anggraini
          {/* {ctx.user.user === undefined ? ctx.user.email : ctx.user.user.displayName} */}
        </Typography>
        <Button onClick={logout} variant="contained" style={{ marginTop: "4px", border: 0, backgroundColor: "#5cb85f", color: "white", padding: "8px 12px", borderRadius: "4px", fontWeight: "700", fontSize: "14px" }}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

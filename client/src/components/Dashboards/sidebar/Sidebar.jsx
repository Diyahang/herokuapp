import React from "react";
import "./sidebar.scss";
import smallLogo from "../../../images/small-logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={smallLogo} alt="logo" />
      </div>
      <div className="center">
        <div className="dash">
          <HomeOutlinedIcon className="icon" />
          <p>Dashboard</p>
        </div>
        <div className="order">
          <Link to="/dashboard/cars">
            <LocalShippingOutlinedIcon className="icon" />
            <p>Cars</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

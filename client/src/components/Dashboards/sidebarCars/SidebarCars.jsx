import React from "react";
import "./SidebarCars.scss";
import smallLogo from "../../../images/small-logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Link } from "react-router-dom";

const SidebarCars = () => {
  return (
    <div className="sidebarCars  ">
      <div className="top">
        <img src={smallLogo} alt="logo" />
      </div>
      <div className="center">
        <div className="dash">
          <Link to="/dashboard">
            <HomeOutlinedIcon className="icon" />
            <p>Dashboard</p>
          </Link>
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

export default SidebarCars;

import React from "react";
import "./cars.scss";
import Navbar from "./navbar/Navbar";
import DataCars from "./listCars/ListCars";
import SidebarCars from "./sidebarCars/SidebarCars";
import WhiteCars from "./whiteSideCars/WhiteCars";

const cars = () => {
  return (
    <div className="cars " style={{ display: "flex", maxWidth: "100%" }}>
      <SidebarCars />

      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <div className="subside">
            <WhiteCars />
          </div>
          <div className="listContainer ">
            <DataCars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default cars;

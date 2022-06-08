import React from "react";
import "./dashboard.scss";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import White from "./white-side/White";
import Table from "./table/Table";
import TableCar from "./tableCar/tableCar";

const dashboard = () => {
  return (
    <div className="home" style={{ display: "flex", maxWidth: "100%" }}>
      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <div className="subside">
            <White />
          </div>
          <div className="listContainer">
            <Table />
            <TableCar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;

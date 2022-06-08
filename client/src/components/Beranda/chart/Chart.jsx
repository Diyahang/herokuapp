import { useState, useEffect } from "react";
import "./chart.scss";
// import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie } from "recharts";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const data = {
  datasets: [
    {
      backgroundColor: ["#cc3333", "#ff6600", "#ffff33", "00ff00", "#00cccc"],
      data: [15, 20, 30, 20, 15],
    },
  ],
  labels: ["Datsun", "ELF", "Avanza", "Jeep", "Truck"],
};

const Chart = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "10px", fontSize: "24px" }}>
      <h4> Mobil Yang Tersedia pada Mei 2022</h4>
      <div className="App" style={{ width: "30%", height: "30%", marginLeft: "26rem", marginTop: "18px" }}>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Chart;

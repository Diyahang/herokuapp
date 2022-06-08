import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Card from "./components/Card";
import DetailCar from "./components/DetailCar";
import Dashboard from "./components/Dashboards/dashboard";
import DashboardCars from "./components/Dashboards/cars";
import AddCars from "./components/Dashboards/addcars";
import PaymentDetail from "./components/PaymentDetail";
import Invoice from "./components/Invoice";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Beranda from "./components/Beranda/Beranda";
import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";
import { AppContext } from "./contexts/app-context";
import { productInputs } from "./formSource";
import jwt_decode from 'jwt-decode';

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);


  const refreshToken = async () => {
    try {
      const res = await axios.post("/refresh", { token: user.refreshToken });
      setUser({
        ...user,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(user.accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const getUser = async () => {
      await fetch("https://backend-binar-car-rental.herokuapp.com/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(`ini errornya${err}`);
        });
    };
    getUser();
  }, []);
  console.log(user);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://backend-binar-car-rental.herokuapp.com/api/login", 
      { email,password});
      setUser(res.data);
    } catch (err) {
      console.log(`errornya : ${err}`);
    }
  };

  const appContextValue = {
    user,
    email,
    setEmail,
    password,
    setPassword,
    handleClick,
  };

  return (
    <div className="App">
      <AppContext.Provider value={appContextValue}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/" element={user ? <Navigate to="/home" /> : <Beranda />} />
          <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
          <Route path="/home" element={user && user.isAdmin == true ? <Navigate to="/dashboard" /> : <Layout />} />
          <Route path="/home" element={user ? <Layout /> : <Navigate to="/login" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/cars" element={<DashboardCars />} />
          <Route path="/dashboard/cars/add-new" element={<AddCars inputs={productInputs} title="Add New Product" />} />
          <Route path="/car" element={<Card />} />
          <Route path="/car/:carId" element={<DetailCar />} />
          <Route path="/car/:carId/detail-pesanan" element={<PaymentDetail />} />
          <Route path="/car/invoice" element={<Invoice />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;

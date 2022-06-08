import React from "react";
import BarPesanan from "./BarPesanan";
import { Box, Grid } from "@mui/material";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

function HeroInvoice() {
  return (
    <>
      <Grid sx={{ background: "#F1F3FF" }}>
        <Box position="relative">
          <Box height={100} />
        </Box>
        <div className="payment-order d-flex justify-content-between container" style={{ marginBottom: "1.8rem" }}>
          <Link to="/car/:carId/detail-pesanan" style={{ color: "black", textDecoration: "none" }}>
            <div className="d-flex">
              <MdArrowBack style={{ fontSize: "1.5rem" }} />
              <h6 className="ms-2 align-self-center">Tiket</h6>
            </div>
            <p className="ms-4">Order ID : xxxxxxx</p>
          </Link>
          <div className="d-flex">
            <div className="circle mb-5 align-self-center">1</div>
            <div className="ms-2 mb-5 align-self-center">Pilih Metode</div>
            <div className="ms-3 mb-5 align-self-center" style={{ background: "#0D28A6", width: "28px", height: "2px" }} />
            <div className="ms-4 mb-5 circle align-self-center">2</div>
            <div className="ms-2 mb-5 align-self-center">Bayar</div>
            <div className="ms-3 mb-5 align-self-center" style={{ background: "#0D28A6", width: "28px", height: "2px" }} />
            <div className="ms-4 mb-5 circle align-self-center">3</div>
            <div className="ms-2 mb-5 align-self-center">Tiket</div>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default HeroInvoice;

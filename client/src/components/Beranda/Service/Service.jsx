import React from "react";
import "./service.scss";
import service from "../../../images/service.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Service = () => {
  return (
    <div className="service">
      <div class="container mt-3" id="service">
        <div class="service">
          <div class="row justify-content-md-center">
            <div class="col-md-6 align-self-center order-2 order-md-1 pb-4 px-4 ps-md-0 p-lg-0">
              <div class="service_img">
                <img src={service} class="img-fluid mx-auto my-0 my-lg-4 d-block" alt="service" />
              </div>
            </div>
            <div class="col-md-6 align-self-center order-1 order-md-2 py-5 py-lg-0">
              <div class="service_desc">
                <h2>Best Car Rental for any kind of trip in Surabaya!</h2>
                <br />
                <p>Sewa mobil di Surabaya bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <div class="list_service">
                  <div class="service">
                    <CheckCircleIcon style={{ color: "#5cb85f" }} /> &emsp;Sewa Mobil Lepas Kunci di Bali 24 Jam
                  </div>
                  <div class="service">
                    <CheckCircleIcon style={{ color: "#5cb85f" }} />
                    &emsp;Sewa Mobil Jangka Panjang Bulanan
                  </div>
                  <div class="service">
                    <CheckCircleIcon style={{ color: "#5cb85f" }} />
                    &emsp;Gratis Antar - Jemput Mobil di Bandara
                  </div>
                  <div class="service">
                    <CheckCircleIcon style={{ color: "#5cb85f" }} />
                    &emsp;Layanan Airport Transfer / Drop In Out
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

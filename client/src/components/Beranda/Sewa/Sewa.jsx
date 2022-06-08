import React from "react";
import "./sewa.scss";
import { Link } from "react-router-dom";

const Sewa = () => {
  return (
    <div className="sewa">
      <div class="container" id="sewa">
        <div class="card-sewa">
          <div class="card-body sewaw">
            <h2 class="card-title text-center mb-4 mt-5">Sewa Mobil di Surabaya Sekarang</h2>
            <p class="text-center p-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="sewa-btn d-flex justify-content-center mb-4">
              <Link to="/login">
                <button type="button">Mulai Sewa Mobil</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sewa;

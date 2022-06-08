import React from "react";
import complete from "../../../images/icon_complete.png";
import price from "../../../images/icon_price.png";
import clock from "../../../images/icon_24hrs.png";
import professional from "../../../images/icon_professional.png";

const WhyUs = () => {
  return (
    <div className="whyus">
      <div class="container" id="whyus">
        <div class="why row justify-content-center">
          <div class="why-us">
            <h2>Why Us</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
        </div>
        {/* card */}
        <div class="why_card">
          <div class="">
            <div class="row justify-content-center">
              <div class="col-lg-3 mb-2">
                <div class="card">
                  <div class="card-body">
                    <img src={complete} alt="complete" />
                    <br />
                    <strong class="why-title">Mobil Lengkap</strong>
                    <p class="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 mb-2">
                <div class="card">
                  <div class="card-body">
                    <img src={price} alt="price" />
                    <br />
                    <strong class="why-title">Harga Murah</strong>
                    <p class="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 mb-4">
                <div class="card">
                  <div class="card-body">
                    <img src={clock} alt="24hrs" />
                    <br />
                    <strong class="why-title">Layanan 24 Jam</strong>
                    <p class="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 mb-4">
                <div class="card">
                  <div class="card-body">
                    <img src={professional} alt="profesional" />
                    <br />
                    <strong class="why-title">Sopir Profesional</strong>
                    <p class="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
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

export default WhyUs;

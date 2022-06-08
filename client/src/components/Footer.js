import React from "react";
import logo from "../images/logo.png";
import fb from "../images/icon_facebook.png";
import instagram from "../images/icon_instagram.png";
import email from "../images/icon_mail.png";
import twitter from "../images/icon_twitter.png";
import twitch from "../images/icon_twitch.png";

function Footer() {
  return (
    <div className="Footer">
      <div class="container-fluid">
        <div class="footer mt-5">
          <div class="row justify-content-center">
            <div class="col-md-3 page mb-2 mt-5">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div class="col-md-3 page mb-2 mt-5">
              <div class="footer-link">
                <p class="footer-link">
                  <p>Our Services</p>
                </p>
                <p class="footer-link">
                  <p>Why Us</p>
                </p>
                <p class="footer-link">
                  <p>Testimonial</p>
                </p>
                <p class="footer-link">
                  <p>FAQ</p>
                </p>
              </div>
            </div>
            <div class="col-md-3 page mb-2 mt-5">
              <p>Contact With Us</p>
              <img src={fb} class="footer-img" alt="facebook" />
              <img src={instagram} class="footer-img" alt="instagram" />
              <img src={twitter} class="footer-img" alt="twitter" />
              <img src={email} class="footer-img" alt="email" />
              <img src={twitch} class="footer-img" alt="twitch" />
            </div>
            <div class="col-md-3 page mb-2 mt-5">
              <p>Copyright Binar 2022</p>
              <img src={logo} class="footer-logo" alt="footer-log" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

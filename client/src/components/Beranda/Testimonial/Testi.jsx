import React from "react";
import "./testi.scss";
import StarRateIcon from "@mui/icons-material/StarRate";
import profile from "../../../images/img_photo1.png";
import profiles from "../../../images/img_photo.png";

const Testi = () => {
  return (
    <div className="testi">
      <div class="text-center mt-5" id="testimonial">
        <h2>Testimonial</h2>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      {/* <!-- card corousel-item --> */}
      <div id="testimonial" class="client pb-5 align-items-center  ">
        <div class="container pt-5 ">
          <div class="align-items-center justify-content-center text-center">
            <center>
              <div class="row text-dark testie">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    {/* <!-- Wrapper for slides --> */}
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="row p-4">
                          <div class="row text-start">
                            <div class="col-sm-2 holder-left">
                              <img src={profile} alt="profile" class="rounded-circle img-responsive img-fluid" />
                            </div>
                            <div class="col-sm-10 holder-right">
                              <div class="mt-2">
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                              </div>
                              <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod "
                              </p>
                              <strong>John Dee 32, Bromo</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="row p-4">
                          <div class="row text-start">
                            <div class="col-sm-2 holder-left">
                              <img src={profiles} alt="profile" class="rounded-circle img-responsive img-fluid" />
                            </div>
                            <div class="col-sm-10 holder-right">
                              <div class="mt-2">
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                              </div>
                              <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod "
                              </p>
                              <strong>John Dee 32, Bromo</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="row p-4">
                          <div class="row text-start">
                            <div class="col-sm-2 holder-left">
                              <img src={profiles} alt="profile" class="rounded-circle img-responsive img-fluid" />
                            </div>
                            <div class="col-sm-10 holder-right">
                              <div class="mt-2">
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                                <StarRateIcon style={{ color: "#f9cc00", marginBottom: "6px" }} />
                              </div>
                              <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod "
                              </p>
                              <strong>John Dee 32, Bromo</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="controls push-right mt-5">
                <button class="border-dark left-btn btn" href="#carouselExampleCaptions" data-bs-slide="prev">
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                    <path d="M7 13L1 7L7 1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <button class="border-dark right-btn btn" href="#carouselExampleCaptions" data-bs-slide="next">
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                    <path d="M1 13L7 7L1 1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testi;

import React from "react";
import "./faq.scss";

const Faq = () => {
  return (
    <div className="faq">
      <div class="container-fluid" id="faq">
        <div class="faqs">
          <div class="row justify-content-center">
            <div class="col-md-4">
              <h2>Frequently Asked Question</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div class="col-md-6 ml-5">
              {/*  accordion  */}
              {/* need  */}
              <div class="accordion-item border">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum quis sint, ab numquam, exercitationem nulla rem ad aut labore fugiat inventore facilis eveniet tempora autem. Modi incidunt voluptatibus ab.</p>
                  </div>
                </div>
              </div>
              <br />
              {/* hari minimal */}
              <div class="accordion-item border">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum quis sint, ab numquam, exercitationem nulla rem ad aut labore fugiat inventore facilis eveniet tempora autem. Modi incidunt voluptatibus ab.</p>
                  </div>
                </div>
              </div>
              <br />
              {/* hari sebelum */}
              <div class="accordion-item border">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum quis sint, ab numquam, exercitationem nulla rem ad aut labore fugiat inventore facilis eveniet tempora autem. Modi incidunt voluptatibus ab.</p>
                  </div>
                </div>
              </div>
              <br />
              {/* hari biaya */}
              <div class="accordion-item border">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,
                    as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <br />
              {/* kecelakaan */}
              <div class="accordion-item border">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                    Bagaimana jika terjadi kecelakaan
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum quis sint, ab numquam, exercitationem nulla rem ad aut labore fugiat inventore facilis eveniet tempora autem. Modi incidunt voluptatibus ab.</p>
                  </div>
                </div>
              </div>
              <br />
              {/* end accordion  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

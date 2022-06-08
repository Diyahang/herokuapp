import { Box } from "@mui/material";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";
import Service from "./Service/Service";
import WhyUs from "./Why Us/WhyUs";
import Testi from "./Testimonial/Testi";
import Sewa from "./Sewa/Sewa";
import Faq from "./Faq/Faq";
import Chart from "./chart/Chart";

const Beranda = () => {
  return (
    <div className="Beranda">
      <Box position="relative" bgcolor="#F1F3FF">
        <Navbar />
        <Hero />
      </Box>
      <div className="services">
        <Service />
      </div>
      <div className="why-us">
        <WhyUs />
      </div>
      <div className="chartss mx-5" style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <Chart />
      </div>
      <div className="testis">
        <Testi />
      </div>
      <div>
        <Sewa />
      </div>
      <div className="faqw">
        <Faq />
      </div>
      <div className="footerBer">
        <Footer />
      </div>
    </div>
  );
};

export default Beranda;

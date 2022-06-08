import React, { Component } from "react";
import Navbar from "./Navbar";
import HeroInvoice from "./HeroInvoice";
import Footer from "./Footer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Grid } from "@material-ui/core";
import DownloadIcon from "@mui/icons-material/Download";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import jsPDF from "jspdf";
import carpdf from "../images/car.png";

class Invoice extends Component {
  // const Invoice = () => {
  pdfGenerate = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(carpdf, "PNG", 65, 20, 500, 400);
    doc.addPage();
    doc.setFont("Helvetica", "bold");
    doc.text(60, 60, "Name : ");
    doc.text(60, 80, "Email : ");
    doc.text(60, 100, "Mobil : ");
    doc.text(60, 120, "Start : ");
    doc.text(60, 140, "Finish : ");
    doc.setFont("Helvetica", "Normal");
    doc.text(100, 60, "Diyah");
    doc.text(100, 80, "Diyah@gmail.com");
    doc.text(100, 100, "Jip");
    doc.text(100, 120, "25 May 2022");
    doc.text(100, 140, "27 May 2022");
    doc.save("car.pdf");
  };
  render() {
    return (
      <div className="invoice">
        <Navbar />
        <HeroInvoice />
        <div className="content" style={{ textAlign: "center" }}>
          <div className="sukses">
            <CheckCircleIcon style={{ color: "#5cb85f", fontSize: "4rem" }} />
            <p className="mx-2" style={{ fontWeight: "bold" }}>
              Pembayaran Berhasil!
            </p>
            <p style={{ color: "gray" }}>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
          </div>
          <div className="pdf" style={{ display: "flex" }}>
            <Box boxShadow={4} sx={{ flexGrow: 1 }} style={{ background: "white", width: "60%", padding: "10px", margin: "auto", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "4px" }}>
              <Grid item xs style={{ marginLeft: "10px", marginTop: "10px", display: "flex", fontWeight: "bold", justifyContent: "space-between" }}>
                Invoice
                <button onClick={this.pdfGenerate} className="cancel" class="btn btn-outline-primary btn-inline" style={{ fontWeight: "bold", borderRadius: "0px" }}>
                  <DownloadIcon /> Unduh
                </button>
              </Grid>
              <Grid style={{ textAlign: "start", padding: "8px", color: "gray" }}>*no invoice</Grid>
              <Grid item xs>
                <Box
                  style={{
                    background: "#e5e4e2",
                    width: "96%",
                    height: "200px",
                    padding: "80px",
                    margin: "auto",
                    marginBottom: "4px",
                    borderRadius: "4px",
                    borderStyle: "dashed",
                    borderColor: "#d3d3d3",
                    wordSpacing: "10px",
                  }}
                >
                  <ImageOutlinedIcon style={{ marginRight: "10px" }} />
                  PDF Viewer
                </Box>
              </Grid>
            </Box>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Invoice;

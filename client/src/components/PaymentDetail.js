import React, { useEffect } from "react";
import { Box, Grid, Typography, Card, CardContent, CardActions, CardActionArea, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { FiUsers, FiSettings, FiCalendar } from "react-icons/fi";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setButton, fetchItem } from "../redux/actions/itemActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroDetail from "./HeroDetail";

function MetodePembayaran() {
  //   const data = useSelector((state) => state.selectedItem);
  //   const btn = useSelector((state) => state.buttonText.buttonText);
  //   const { name, category, price, passengers, fuel, time } = data;
  //   const { id } = useParams();
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (id && id !== "") dispatch(fetchItem(id));
  //     return () => {
  //       dispatch(setButton("Bayar"));
  //     };
  //   }, [id]);
  const { carId } = useParams();
  console.log(carId);
  const cars = useSelector((state) => state.selectedItem);
  console.log(cars);
  const dispatch = useDispatch();
  const btn = useSelector((state) => state.buttonText.buttonText);

  useEffect(() => {
    if (carId && carId !== "") dispatch(fetchItem(carId));
    dispatch(setButton("Bayar"));
  });

  return (
    <div>
      <Navbar />
      <HeroDetail />

      <div className="MetodePembayaran">
        <Box className="FilterSearch" sx={{ display: "flex", justifyContent: "center" }}>
          <Grid sx={{ display: "flex" }}>
            <Grid item xs={10}>
              <Card style={{ width: "90%", marginTop: "6rem" }}>
                <CardContent>
                  <Box sx={{ p: 3 }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                      Pilih Bank Transfer
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontSize: 16 }} gutterBottom variant="body2">
                      Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking
                    </Typography>
                    <Box sx={{ py: 2, borderBottom: "1px solid #EEEEEE" }}>
                      <Button sx={{ border: "1px solid #D0D0D0", color: "black", width: 80, mr: 3 }}>BCA</Button>
                      BCA Transfer
                    </Box>
                    <Box sx={{ py: 2, borderBottom: "1px solid #EEEEEE" }}>
                      <Button sx={{ border: "1px solid #D0D0D0", color: "black", width: 80, mr: 3 }}>BNI</Button>
                      BNI Transfer
                    </Box>
                    <Box sx={{ py: 2, borderBottom: "1px solid #EEEEEE" }}>
                      <Button sx={{ border: "1px solid #D0D0D0", color: "black", width: 80, mr: 3 }}>Mandiri</Button>
                      Mandiri Transfer
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card style={{ width: "100%", marginTop: "6rem" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }} component="div">
                      {cars?.name} / {cars?.category}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <FiUsers color="grey" />
                      <Typography gutterBottom variant="body2" color="text.secondary" sx={{ ml: 1, mr: 2 }}>
                        {cars.passengers} Orang
                      </Typography>
                      <FiSettings color="grey" />
                      <Typography gutterBottom variant="body2" color="text.secondary" sx={{ ml: 1, mr: 2 }}>
                        {cars.fuel}
                      </Typography>
                      <FiCalendar color="grey" />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        Tahun {new Date(cars.time).getFullYear()}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardContent>
                    <Accordion elevation={0} sx={{ border: "0", width: "100%" }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{ p: 0 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                          <Typography variant="h6" sx={{}}>
                            Total
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            Rp {Number(cars.price).toLocaleString("id-ID")}
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails sx={{ p: 0 }}>
                        <Box>
                          <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }} component="div">
                            Harga
                          </Typography>
                          <Box sx={{ display: "flex", justifyContent: "space-between", pl: 3 }}>
                            <Typography sx={{ mb: 1.5, fontSize: 16 }} gutterBottom variant="body2">
                              <li>1 Mobil dengan sopir</li>
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 16 }} gutterBottom variant="body2">
                              Rp {Number(cars.price).toLocaleString("id-ID")}
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }} component="div">
                            Biaya Lainnya
                          </Typography>
                          <Box sx={{ display: "flex", justifyContent: "space-between", pl: 3 }}>
                            <Typography sx={{ mb: 1.5, fontSize: 16 }} gutterBottom variant="body2">
                              <li>Pajak</li>
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 16, color: "#5CB85F" }} gutterBottom variant="body2">
                              Termasuk
                            </Typography>
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: "space-between", pl: 3 }}>
                            <Typography sx={{ mb: 1.5, fontSize: 16 }} gutterBottom variant="body2">
                              <li>Biaya Makan Sopir</li>
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 16, color: "#5CB85F" }} gutterBottom variant="body2">
                              Termasuk
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ pb: 2, borderBottom: "1px solid #D0D0D0" }}>
                          <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }} component="div">
                            Belum Termasuk
                          </Typography>
                          <Box sx={{ pl: 3 }}>
                            <Typography sx={{ mb: 1.5, fontSize: 16 }} gutterBottom variant="body2">
                              <li>Bensin</li>
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 16 }} gutterBottom variant="body2">
                              <li>Tol dan Parkir</li>
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ pt: 3, display: "flex", justifyContent: "space-between" }}>
                          <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
                            Total
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            Rp {Number(cars.price).toLocaleString("id-ID")}
                          </Typography>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to="/car/invoice">
                    <Button fullWidth variant="contained" style={{ background: "#5CB85F", color: "white" }}>
                      {btn}
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>

      <Footer />
    </div>
  );
}

export default MetodePembayaran;

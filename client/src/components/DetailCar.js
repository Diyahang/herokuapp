import React, { useEffect } from "react";
import { PeopleOutline, SettingsOutlined, CalendarTodayOutlined } from "@material-ui/icons";
import { makeStyles, Button, CardActionArea, Card, CardContent, CardActions, CardMedia, Typography, Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setButton, fetchItem } from "../redux/actions/itemActions";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  detailCard: {
    background: "white",
    padding: "100px 0",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default function DetailCard() {
  const { carId } = useParams();
  const detaildata = useSelector((state) => state.selectedItem);
  const dispatch = useDispatch();
  const btn = useSelector((state) => state.buttonText.buttonText);

  useEffect(() => {
    if (carId && carId !== "") dispatch(fetchItem(carId));
    dispatch(setButton("Lanjutkan pembayaran"));
  });

  const classes = useStyles();
  return (
    <>
      <Header />
      <Search />
      <div className={classes.detailCard}>
        <div style={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "20px" }}>
          <Card item={true} style={{ width: "60%", marginBottom: "10px" }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingBottom: "8px" }}>
                  Tentang Paket
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                  Include
                </Typography>

                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px", color: "#8A8A8A" }}>
                  <ul>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                </Typography>

                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                  Exclude
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px", color: "#8A8A8A" }}>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </Typography>
                <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingBottom: "8px" }}>
                  Refund, Reschedule, Overtime
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px", color: "#8A8A8A" }}>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card style={{ width: "32%", marginBottom: "10px" }}>
            <CardActionArea>
              <CardMedia component="img" image={detaildata.image} alt="car" style={{ padding: "10px", maxHeight: "200px" }} />
              <CardContent>
                <Typography variant="body2" paragraph style={{ fontWeight: "bold" }}>
                  {detaildata.name} / {detaildata.category}
                </Typography>
                <Typography variant="p" color="text.secondary" style={{ display: "flex", color: "#8A8A8A" }}>
                  <PeopleOutline /> {detaildata.passengers} orang
                  <SettingsOutlined /> {detaildata.fuel}
                  <CalendarTodayOutlined /> Tahun {detaildata.time}
                </Typography>
                <Typography variant="body2" component="div" style={{ display: "flex", fontWeight: "bold", paddingTop: "50px", justifyContent: "space-between" }}>
                  <Grid style={{ display: "flex" }}>
                    <Grid style={{ marginRight: "200px" }}>Total</Grid>
                    <Grid>Rp {detaildata.price}</Grid>
                  </Grid>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href={`/car/${detaildata.id}/detail-pesanan`} variant="contained" style={{ background: "#5CB85F", color: "white" }} fullWidth>
                {btn}
              </Button>
            </CardActions>
          </Card>
        </div>
        <Button href={`/car/${detaildata.id}/detail-pesanan`} variant="contained" style={{ background: "#5CB85F", color: "white" }}>
          {btn}
        </Button>
      </div>
      <Footer />
    </>
  );
}

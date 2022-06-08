import React, { useState } from "react";
import { useEffect } from "react";
import { fetchItems, filter } from "../redux/actions/itemActions";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Box, Grid, Select, TextField, FormControl, InputLabel, Button, Input, FormGroup, Label } from "@material-ui/core";

export default function Search() {
  const cars = useSelector((state) => state.cars.items);
  // console.log(cars);
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const [mobil, setMobil] = useState("");
  // console.log(mobil);

  const handleSearch = () => {
    const data = cars.filter((cars) => cars.name === (mobil === "semua" ? cars.name : mobil));
    dispatch(filter(data));
  };

  useEffect(() => {
    dispatch(fetchItems());
  });

  // const location = useLocation().pathname;
  // const dispatch = useDispatch();

  // Cars Data
  // const show = useSelector((state) => state.show.show);
  // const cars = useSelector((state) => state.cars.items);
  // const tahun = [...new Set(cars.map((cars) => cars.time))].sort();
  // const kategori = [...new Set(cars.map((cars) => cars.category))].sort();
  // const kapasitas = [...new Set(cars.map((cars) => cars.passengers))].sort();

  // Taking value from search Form
  // const [mobil, setMobil] = useState("");
  // const [carsCategory, setCarsCategory] = useState("");
  // const [year, setYear] = useState("");
  // const [passengers, setPassengers] = useState("");

  // Button Handle
  // const handleSearch = () => {
  //   const newData = cars
  //     .filter((cars) => cars.name === (mobil === "" ? cars.name : mobil))
  //     .filter((cars) => cars.category === (carsCategory === "" ? cars.category : carsCategory))
  //     .filter((cars) => cars.time === (year === "" ? cars.time : year))
  //     .filter((cars) => cars.passengers === (passengers === "" ? cars.passengers : Number(passengers)));
  //   dispatch(filter(newData));
  // };

  return (
    <>
      <div className="Search" boxShadow={4} style={{ display: "flex", position: "relative", justifyContent: "center", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)" }}>
        <Box
          container
          boxShadow={4}
          borderRadius={8}
          sx={{ flexGrow: 1 }}
          style={{ borderRadius: "8px", boxShadow: "0px 2px 10px -1px #444444", position: "absolute", top: "-56px", background: "white", width: "80%", zIndex: 1000, display: "flex", alignItems: "center", padding: "24px" }}
        >
          {/* search */}

          <Grid elevation={0} container spacing={1}>
            <Grid item>
              <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Jenis Mobil</InputLabel>
              <FormControl size="small" margin="dense" variant="outlined" style={{ borderRadius: 4, width: "200px", borderColor: "#5cb85f" }}>
                <Select id="exampleSelect" variant="outlined" name="select" type="select" onChange={(e) => setMobil(e.target.value)}>
                  <option disabled selected hidden value={""}>
                    Pilih Mobil
                  </option>
                  <option value={"Semua"}>All</option>
                  <option value={"Sedan"}>Sedan</option>
                  <option value={"Beetie"}>Beetie</option>
                  <option value={"Avanza"}>Avanza</option>
                  <option value={"Ferrari"}>Ferrari</option>
                  <option value={"BMW X1"}>BMW X1</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs>
              <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Tanggal</InputLabel>
              <TextField
                fullWidth
                size="small"
                margin="dense"
                color="success"
                variant="outlined"
                id="date"
                type="date"
                defaultValue={new Date()}
                sx={{ width: 200 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs>
              <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Waktu Jemput/ Ambil</InputLabel>
              <TextField
                fullWidth
                size="small"
                margin="dense"
                variant="outlined"
                id="time"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
                sx={{ width: 220 }}
              />
            </Grid>

            <Grid item xs>
              <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Jumlah Penumpang (Optional)</InputLabel>
              <TextField
                fullWidth
                size="small"
                margin="dense"
                variant="outlined"
                id="outlined-number"
                defaultValue="0"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ input: { color: "yellow" }, label: { color: "blue" } }}
              />
            </Grid>

            <Grid>
              <Button href={`/car`} variant="contained" onClick={() => handleSearch()} style={{ color: "white", background: "#5cb85f", justifyContent: "center", marginTop: "36px", marginRight: "5px", fontWeight: "500" }}>
                Cari Mobil
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

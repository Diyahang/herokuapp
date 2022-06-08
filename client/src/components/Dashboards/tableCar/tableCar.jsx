import React from "react";
import "./tableCar.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../../redux/actions/itemActions";
import { collection, getDocs, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";

const TableCar = () => {
  // const cars = useSelector((state) => state.cars.items);
  // console.log(cars);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchItems());
  // });

  const [cars, setCars] = useState([]);
  const carsCollectionRef = collection(db, "cars");

  useEffect(() => {
    const getCars = async () => {
      const data = await getDocs(carsCollectionRef);
      console.log(data);
      setCars(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCars();
  }, []);
  return (
    <div className="tableCar">
      <div className="line d-flex">
        <div className="title-table"></div>
        List Car
      </div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 1020 }} aria-label="simple table">
          <TableHead>
            <TableRow className="headCell">
              <TableCell className="tableCell">Car</TableCell>
              <TableCell className="tableCell">Category</TableCell>
              <TableCell className="tableCell">Price</TableCell>
              <TableCell className="tableCell">Start Rent</TableCell>
              <TableCell className="tableCell">Finish Rent</TableCell>
              <TableCell className="tableCell">Update Rent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((car) => {
              return (
                <TableRow key={car.id}>
                  <TableCell className="tableCell name">{car.mobil}</TableCell>
                  <TableCell className="tableCell category">
                    <div className="cellWrapper">{car.category}</div>
                  </TableCell>
                  <TableCell className="tableCell price">Rp. {car.price.toLocaleString("id-ID")}</TableCell>
                  <TableCell className="tableCell start">{car.startRent}</TableCell>
                  <TableCell className="tableCell finish">{car.finishRent}</TableCell>
                  <TableCell className="tableCell update">{car.startRent}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableCar;

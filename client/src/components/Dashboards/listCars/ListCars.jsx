import "./ListCars.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Widgets from "../widgets/Widgets";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../../redux/actions/itemActions";
import { CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";
import carimg from "../../../images/car.png";

const ListCars = () => {
  const [cars, setCars] = useState([]);
  const carsCollectionRef = collection(db, "cars");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteUser = async (id) => {
    const carDoc = doc(db, "cars", id);
    await deleteDoc(carDoc);
  };

  useEffect(() => {
    const getCars = async () => {
      const data = await getDocs(carsCollectionRef);
      console.log(data);
      setCars(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCars();
  }, []);
  console.log(cars);

  return (
    <>
      <div className="data-car">
        <div className="top d-flex">
          <div className="title">Cars</div>
          <ChevronRightOutlinedIcon />
          <div className="subtitle d-flex">List Cars</div>
        </div>
        <div className="page d-flex">
          List Cars
          <div className="add">
            <Link to="/dashboard/cars/add-new">
              <button className="add-new">+ Add New</button>
            </Link>
          </div>
        </div>
        <div className="line d-flex">
          <Widgets />
        </div>
        <div className="listCar row">
          {cars.map((car) => {
            return (
              <div class="col-4">
                <div class="card mb-4">
                  <div class="card-body">
                    <CardMedia component="img" image={car.image} alt={car.mobil} style={{ padding: "10px", borderColor: "black", maxHeight: "200px" }} />
                    <p class="card-title tipe-mobil">
                      {car.mobil} / {car.category}
                    </p>
                    <p class="card-text harga-mobil">Rp. {car.price.toLocaleString("id-ID")} / hari</p>
                    <p class="rent-duration">
                      <KeyOutlinedIcon />
                      {car.startRent} - {car.finishRent}
                    </p>
                    <p class="time-updated">
                      <AccessTimeOutlinedIcon /> Updated at {car.startRent}
                    </p>
                    <div class="row no-gutters d-flex ">
                     <button
                          onClick={() => {
                            deleteUser(car.id);
                          }}
                          type="button"
                          class="btn btn-outline-danger btn-inline"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <DeleteOutlineOutlinedIcon />
                          Delete
                      </button>
                    
                      <button
                          type="button"
                          class="btn btn-success btn-inline"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <ModeEditOutlineOutlinedIcon /> Edit
                      </button>
                      {/* <button class="btn btn-success btn-inline" type="button">
                        <ModeEditOutlineOutlinedIcon /> Edit
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListCars;

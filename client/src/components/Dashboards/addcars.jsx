import React, { useState, useEffect } from "react";
import "./addcars.scss";
import Navbar from "./navbar/Navbar";
import SidebarCars from "./sidebarCars/SidebarCars";
import WhiteCars from "./whiteSideCars/WhiteCars";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Link } from "react-router-dom";
import { doc, setDoc, addDoc, collection, serverTimestamp, getDocs } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Addcars = ({ inputs }) => {
  const [file, setFile] = useState("");
  const [per, setPerc] = useState(null);
  const [newMobil, setNewMobil] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newStart, setNewStart] = useState("");
  const [newFinish, setNewFinish] = useState("");
  const [newCreate, setNewCreate] = useState("");
  const [cars, setCars] = useState([]);
  const [url, setUrl] = useState("");
  const carsCollectionRef = collection(db, "cars");

  const createCars = async () => {
    await addDoc(carsCollectionRef, { mobil: newMobil, price: newPrice, category: newCategory, startRent: newStart, finishRent: newFinish, creatAt: newCreate, image: url });
  };

  useEffect(() => {
    // const getCars = async () => {
    //   const data = await getDocs(carsCollectionRef);
    //   // setCars(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };

    const uploadFile = async () => {
      const gam = await getDocs(carsCollectionRef);
      const name = new Date().getTime() + file.name;
      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // setCars((prev) => ({ ...prev, image: downloadURL }));
            setUrl(downloadURL);
          })
            .catch((error) => {
              console.log(error.message, "error url");
            });
        }
      );
    };

    // getCars();
    file && uploadFile();
  }, [file]);

  console.log(cars);

  return (
    <div className="addcars " style={{ display: "flex", maxWidth: "100%" }}>
      <SidebarCars />

      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <div className="subside">
            <WhiteCars />
          </div>
          <div className="listContainer ">
            <div className="tops d-flex">
              <div className="title">Cars</div>
              <ChevronRightOutlinedIcon />
              <div className="title d-flex">List Cars</div>
              <ChevronRightOutlinedIcon />
              <div className="subtitle d-flex">Add New Car</div>
            </div>
            <div className="top">
              <h2>Add New Car</h2>
            </div>

            <div className="bottom">
              <div className="left">
                <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="img-car" />
              </div>
              <div className="right">
                {/* <form onSubmit={createCars}> */}
                <div className="formInput">
                  <label htmlFor="file">
                    Gambar : <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input type="file" id="file" onChange={(event) => setFile(event.target.files[0])} style={{ display: "none" }} />
                </div>

                <div className="formInput">
                  <label>Nama Mobil</label>
                  <input
                    type="text"
                    placeholder="Avanza"
                    onChange={(event) => {
                      setNewMobil(event.target.value);
                    }}
                  />
                </div>
                <div className="formInput">
                  <label>Harga</label>
                  <input
                    type="text"
                    placeholder="Rp. 500.000"
                    onChange={(event) => {
                      setNewPrice(event.target.value);
                    }}
                  />
                </div>
                <div className="formInput">
                  <label>Category</label>
                  <input
                    type="text"
                    placeholder="small"
                    onChange={(event) => {
                      setNewCategory(event.target.value);
                    }}
                  />
                </div>
                <div className="formInput">
                  <label>Start Rent</label>
                  <input
                    type="text"
                    placeholder="22 May 2022"
                    onChange={(event) => {
                      setNewStart(event.target.value);
                    }}
                  />
                </div>
                <div className="formInput">
                  <label>Finish Rent</label>
                  <input
                    type="text"
                    placeholder="23 May 2022"
                    onChange={(event) => {
                      setNewFinish(event.target.value);
                    }}
                  />
                </div>
                <div className="formInput">
                  <label>Update at</label>
                  <input
                    type="text"
                    placeholder="22 May 2022"
                    onChange={(event) => {
                      setNewCreate(event.target.value);
                    }}
                  />
                </div>
                <Link to="/dashboard/cars">
                  <button onClick={createCars} disabled={per !== null && per < 100} className="submit" class="btn btn-success btn-inline">
                    Submit
                  </button>
                </Link>
                <Link to="/dashboard/cars">
                  <button className="cancel" class="btn btn-outline-danger btn-inline">
                    Cancel
                  </button>
                </Link>
                {/* </form> */}
                <div className="klik"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcars;

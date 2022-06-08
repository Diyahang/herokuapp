import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { fetchItems } from "../redux/actions/itemActions";
import Cars from "./Cars";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";


const Card = () => {
  const cars = useSelector((state) => state.cars.items);
  console.log(cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  });

  return (
    <>
      <Header />
      <Search />
      <div>
        <Grid container justifyContent="center">
          {/* {cars ? ( */}
          {typeof cars !== "undefined" ? (
            cars.map((item) => {
              return (
                <Grid elevation={0} spacing={1} item key={item.id}>
                  <Cars item={item} />
                </Grid>
              );
            })
          ) : (
            <Typography>Empty List</Typography>
          )}
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Card;

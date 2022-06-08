import customAPI from "../../apis/api";
import { ActionTypes } from "../constants";

// data cars
export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const response = await customAPI.get("/cars");
      // console.log(response);
      dispatch({
        type: ActionTypes.FETCH_ITEMS,
        payload: response.data,
      });
      dispatch({
        type: ActionTypes.SEARCH_MOBIL,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// data cars:id
export const fetchItem = (id) => {
  return async (dispatch) => {
    try {
      const response = await customAPI.get(`/cars/${id}`);
      console.log(response);
      dispatch({
        type: ActionTypes.SELECTED_ITEM,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// set button
export const setButton = (button) => {
  return {
    type: ActionTypes.SET_BUTTON,
    payload: button,
  };
};

export const filter = (mobil) => {
  return {
    type: ActionTypes.SEARCH_MOBIL,
    payload: mobil,
  };
};

// export const setShow = (show) => {
//   return {
//     type: ActionTypes.SET_SHOW,
//     payload: show,
//   };
// };

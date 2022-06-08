import { combineReducers } from "redux";
import { itemReducer, selectedItemReducer, buttonReducer, searchItemReducer, showReducer } from "./itemReducers";

const rootReducer = combineReducers({
  cars: itemReducer,
  selectedItem: selectedItemReducer,
  buttonText: buttonReducer,
  searchItem: searchItemReducer,
  // show: showReducer,
});

export default rootReducer;

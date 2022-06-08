import { ActionTypes } from "../constants";

const initialState = {
  cars: [],
  filter: {},
  buttonText: "",
  // show: true,
};

export const itemReducer = (state = initialState.cars, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case ActionTypes.SEARCH_MOBIL:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export const selectedItemReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_ITEM:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const buttonReducer = (state = initialState.buttonText, action) => {
  switch (action.type) {
    case ActionTypes.SET_BUTTON:
      return {
        ...state,
        buttonText: action.payload,
      };
    default:
      return state;
  }
};

export const searchItemReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_MOBIL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};


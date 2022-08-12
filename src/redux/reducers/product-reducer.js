import { ActionTypes } from "../constants/action-type";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      console.log(">>>>>>>Products<<<<<<<<<");
      console.log({ Products: payload });
      console.log({ ...state, products: payload });
      return { ...state, products: payload };
    case ActionTypes.SELECT_PRODUCT:
      break;
    default:
      return state;
  }
};

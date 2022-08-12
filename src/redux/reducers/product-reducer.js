import { ActionTypes } from "../constants/action-type";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      console.log(">>>>>>> Product list <<<<<<<<<");
      console.log({ Products: payload });
      console.log({ ...state, products: payload });
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const productSelectedReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_PRODUCT:
      console.log(">>>>>>> Product detail <<<<<<<");
      console.log({ Product: payload });
      console.log({ ...state, product: payload });
      return { ...state, ...payload };

    default:
      return state;
  }
};

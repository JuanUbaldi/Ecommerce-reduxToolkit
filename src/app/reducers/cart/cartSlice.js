import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  totalCount: 0,
  productsList: [],
};
export const cartSlice = createSlice({
  name: "cart", //denominacion
  initialState: initialState, //estado inicial
  //objeto en forma de funcion
  reducers: {
    addProductToCart: (state, action) => {
      state.totalCount += 1;
      state.productsList = [...state.productsList, action.payload];
    },
    removeProductToCart: (state, action) => {
      const productId = action.payload;
      state.totalCount -= 1;
      state.productsList = state.productsList.filter(
        (product) => product.id !== productId
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductToCart, removeProductToCart } = cartSlice.actions;
//exporto la totalidad del reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;

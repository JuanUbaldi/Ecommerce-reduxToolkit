/* Creo los reducers:
en app, carpeta reducers. En reducers, carpeta user, y en user, archivo userSlice.js
importo la funcion createSlice de @reduxjs/toolkit
 */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fullName: "",
  email: "",
  token: "",
};
export const userSlice = createSlice({
  name: "user", //denominacion
  initialState: initialState, //estado inicial
  //objeto en forma de funcion
  reducers: {
    setUser: (state, action) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    unSetUser: (state) => {
      state.fullName = "";
      state.email = "";
      state.token = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, unSetUser } = userSlice.actions;
//exporto la totalidad del reducer
const userReducer = userSlice.reducer;
export default userReducer;

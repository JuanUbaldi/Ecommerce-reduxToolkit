//importamos el configureStore desde reduxToolkit
import { configureStore } from "@reduxjs/toolkit";
//importo con un nombre arbitrario el userSlice (yo le puse userReducer)
import userReducer from "./reducers/user/userSlice";
//lo exportamos creando un store con los reducers
import cartReducer from "./reducers/cart/cartSlice";

export default configureStore({
  //colocamos los reducers (carpeta:import)
  reducer: {user: userReducer, cart: cartReducer },
});

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
//importo el Provider de react-redux
import { Provider } from "react-redux";
//importo el store desde la carpeta original
import store from "./app/store.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  //Almaceno toda la app con el provider y el store pasado por props (previamente importado)
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

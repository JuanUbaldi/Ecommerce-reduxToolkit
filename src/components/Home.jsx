import Button from "react-bootstrap/Button";
import ProductList from "./ProductList";
//import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { unSetUser } from "../app/reducers/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./Home.css";
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(unSetUser());
    navigate("/");
  };
  return (
    <div className="home">
      <h2 className="h2Tienda">TIENDA</h2>
      <div className="flexImg">
        <img
          style={{ width: "50px", height: "50px" }}
          src={user.token}
          alt=""
        />
        <h3>Hola {user.fullName}!! que vas a comprar el dia de hoy?</h3>
      </div>
      <Button
        className="botonLogOut"
        variant="outline-success"
        onClick={handleLogout}
      >
        Log Out
      </Button>
      <ProductList />
    </div>
  );
}

export default Home;

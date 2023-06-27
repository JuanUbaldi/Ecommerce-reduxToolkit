import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { setUser } from "../app/reducers/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./index.css";
function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find(
          (user) => user.email === e.target[0].value
        );

        if (encontrado) {
          if (encontrado.password === e.target[1].value) {
            dispatch(
              setUser({
                email: encontrado.value,
                fullName: encontrado.first_name,
                token: encontrado.image,
              })
            );
            navigate("/home");
          }
        }
      });
  };

  return (
    <div className="index">
    <h1 className="h1Tienda">TIENDA VIRTUAL</h1>
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="adressLabel">Email address</Form.Label>
        <Form.Control
          style={{ backgroundColor: "#66a260" }}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="passwordLabel">Password</Form.Label>
        <Form.Control
          style={{ backgroundColor: "#66a260" }}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className="buttonForm" variant="success" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Index;

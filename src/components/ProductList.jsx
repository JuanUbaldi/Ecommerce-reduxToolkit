import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductToCart,
  removeProductToCart,
} from "../app/reducers/cart/cartSlice";
import "./ProductList.css";
function ProductList() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const { productsList } = useSelector((state) => state.cart);

  const handleAddOrRemoveToCart = (productId) => {
    const encontrado = products.find((product) => product.id === productId);
    console.log(encontrado);
    if (productsList.find((pdt) => pdt.id === productId)) {
      dispatch(removeProductToCart(productId));
    } else {
      dispatch(addProductToCart(encontrado));
    }
  };

  return (
    <>
      <div className="flexProducts">
        {products.map((product) => {
          return (
            <Card key={product.id} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "100px", height: "100px" }}
              />
              <Card.Body className="cardBody">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleAddOrRemoveToCart(product.id);
                  }}
                >
                  {productsList.find((pdt) => pdt.id === product.id)
                    ? "remove "
                    : "add "}
                   to cart
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;

import { useDispatch, useSelector } from "react-redux";
import { removeProductToCart } from "../app/reducers/cart/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const { productsList } = useSelector((state) => state.cart);
  const handleRemoveProduct = (productId) =>
    dispatch(removeProductToCart(productId));
  return (
    <>
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">category</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td scope="row">{product.name}</td>
                <td scope="row">{product.price}</td>
                <td scope="row">{product.category}</td>
                <td scope="row">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleRemoveProduct(product.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

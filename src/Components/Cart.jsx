import React from "react";
import { useCart } from "react-use-cart";
import "./Cart.css";
const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return <h3 className="text-center fw-bold py-5">My cart is Empty.</h3>;
  return (
    <div className="container-fluid py-3" id="cartbag">
      <div className="row d-flex justify-content-center">
        <h2 className="text-center py-3 ">My Cart</h2>
        <div className="col-12 col-lg-8 py-4">
          <div className="d-flex justify-content-center py-3">
            <p className="position-relative fw-bold text-title me-5">
              <img src="https://img.icons8.com/fluency/38/null/favorite-cart.png" />
              <span className="position-absolute translate-middle rounded-pill badge bg-danger mx-1">
                {totalUniqueItems}
              </span>
            </p>
            <p className="fw-bolder text-title mt-2">
              Total Items
              <span className="position-absolute translate-middle rounded-pill badge bg-success mx-1 ">
                {totalItems}
              </span>
            </p>
            <div className="col-auto ms-auto">
              <h4>Total Price: Rs.{cartTotal}</h4>
            </div>
          </div>
          <div>
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index} className="align-middle">
                      <td>
                        <img src={item.img} className="img-cart" />
                      </td>
                      <td>{item.title} </td>
                      <td>{item.price} </td>

                      <td>Quantity: {item.quantity} </td>
                      <td>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="btn btn-outline-dark mx-1"
                        >
                          -
                        </button>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          className="btn btn-outline-dark mx-1"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="btn btn-outline-danger mx-3"
                        >
                          Remove item
                        </button>{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button className="btn btn-danger my-3" onClick={() => emptyCart()}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

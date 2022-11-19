import React from "react";
import { useCart } from "react-use-cart";
import "./Cart.css";
const Cards = (props) => {
  const { addItem } = useCart();
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center">
        <div class="card mt-3 ">
          <img
            src={props.img}
            class="card-img-top img-fluid h-75 rounded"
            alt="..."
          />
          <div class="card-body">
            <div className="d-flex justify-content-between">
              <h5 class="card-title fw-semibold">{props.title}</h5>
              <span className="fw-bolder">Rs.{props.price}</span>
            </div>
            <p class="card-text">{props.desc}</p>

            <button
              class="btn btn-sm shadow btn-outline-success w-100"
              onClick={() => addItem(props.item)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

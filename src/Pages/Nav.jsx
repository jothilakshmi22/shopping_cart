import React from "react";
import { useCart } from "react-use-cart";
import "./Page.css";
function Nav() {
  const { totalUniqueItems, totalItems, addItem } = useCart();

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid mx-5">
          <a class="navbar-brand" href="#">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg?w=360"
              alt=""
              width="100px"
              height="50px"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link fw-semibold" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link fw-semibold"
                  aria-current="page"
                  href="#traditional"
                >
                  Traditional Wear
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-semibold" href="#western">
                  Western Wear
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-semibold" href="#sport">
                  Sport Wear
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link  fw-semibold" href="#night">
                  Night Wear
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-semibold" href="#maternity">
                  Maternity Wear
                </a>
              </li>
            </ul>

            <a href="#cartbag">
              <img src="https://img.icons8.com/fluency/38/null/favorite-cart.png" />
              <span className=" translate-middle rounded-pill badge bg-danger mx-1">
                {totalUniqueItems}
              </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

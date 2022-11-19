import React from "react";
import "./Page.css";
import imgslider from "../Data/images/kurthisliderr.webp";
import slider2 from "../Data/images/sliderjean.jpg";
import slider3 from "../Data/images/slidermain.jpg";
import slidergif from "../Data/images/slidergif.gif";
function Slider() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide container mt-5 pt-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            aria-label="Slide 1"
            className="active bg-dark"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="bg-dark"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="bg-dark"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
            className="bg-dark"
          ></button>
        </div>
        <div class="carousel-inner mt-4">
          <div class="carousel-item active">
            <img src={slider3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img
              src={slidergif}
              class="d-block w-100 img-fluid active"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src={imgslider} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={slider2} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;

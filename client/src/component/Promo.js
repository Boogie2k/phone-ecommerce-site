import React from "react";

const Promo = () => {
  return (
    <div
      id="carouselExampleAutoplaying "
      class="carousel slide promo"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item  active">
          <div className="cover-one ">
            <h4>Check out new Arrivals</h4>
          </div>
        </div>
        <div class="carousel-item cover-two">
          {" "}
          <div className="cover-two">
            <h4>
              {" "}
              check out our catalogue and order! no delievery fee for any
              product
            </h4>
          </div>
        </div>
        <div class="carousel-item ">
          {" "}
          <div className="cover-three">
            {" "}
            <h4>Hot deals just for you!</h4>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Promo;

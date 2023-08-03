import React from "react";

function Banner() {
  return (
    <div className="container contback mt-4 rounded ">
      <div className="row">
        <div className="col-md-6">
          <h2 className="mt-5 text-light fw-bold">
            Sell Your Skills and Get Paid
          </h2>
          <h3 className="text-dark fst-italic mt-3">
            Sell your products without any charges and get multiple Clients.
          </h3>
          <div className="">
            <a href="/profile" className="btn btn-dark fw-bold fs-4 flex">
              Become Seller
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="./images/freelancing.jpg"
            style={{ width: "17rem" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;

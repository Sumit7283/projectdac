import axios from "axios";
import React from "react";
import url from "../ApiServices/BackEndApi";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function ShowFound() {
  const [FoundProduct, setFoundProduct] = useState([]);

  const init = () => {
    axios
      .get(`${url}/product/getproduct`)
      .then((Response) => {
        setFoundProduct(Response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container my-4">
        <h2 className="text-center">ALL FOUND PRODUCTS</h2>

        <div className="row">
          {FoundProduct.length > 0
            ? FoundProduct.map((FoundProduct) => (
                <div className="col-md-4">
                  <div className="card mt-5" style={{ width: "18rem" }}>
                    <img
                      src={FoundProduct.url}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        {FoundProduct.productName}
                      </h5>
                      <p key={FoundProduct.id} className="card-text">
                        <b>id </b> : {FoundProduct.id}
                      </p>
                      <p className="card-text">
                        <b> Lost Location</b> : {FoundProduct.lostLocation}
                      </p>
                      <p className="card-text">
                        <b>Catagory</b> : {FoundProduct.catagory}
                      </p>
                      <div className="text-center">
                        <a href="/" className="btn btn-primary ">
                          claim
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "no products"}
        </div>
      </div>
    </>
  );
}

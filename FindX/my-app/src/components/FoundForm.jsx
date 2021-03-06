import React, { useState } from "react";
import axios from "axios";
import url from "../ApiServices/BackEndApi";
import { toast } from "react-toastify";
import Navbar from "./Navbar";

export default function FoundForm() {
  const [foundproduct, setFoundProduct] = useState({});

  const handleForm = (e) => {
    console.log(foundproduct);
    e.preventDefault();
    saveFoundData(foundproduct);
  };

  const saveFoundData = (data) => {
    axios.post(`${url}/product/add/`, data).then(
      (response) => {
        console.log(response);

        toast.success("item submitted", {
          position: "top-center",
        });
      },
      (error) => {
        console.log(error);
        toast.error("oops something wnt wrong! try again", {
          position: "top-center",
        });
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="wrapper bg-white ">
        <div className="h2 text-center">Submit Found Property</div>
        <div className="h4 text-muted text-center pt-2">
          fill the following details
        </div>
        <form className="pt-3" id="mydata">
          <div className="form-group py-4">
            <span> product Name</span>

            <div className="input-field">
              <input
                type="text"
                name="productName"
                id="productName"
                placeholder=""
                onChange={(e) => {
                  setFoundProduct({
                    ...foundproduct,
                    productName: e.target.value,
                  });
                }}
                required
              />
            </div>

            <div className="form-group py-4 pt-5">
              <span> Lost Location</span>

              <div className="input-field">
                <input
                  type="text"
                  placeholder=" "
                  name="lostLocation"
                  id="lostLocation"
                  onChange={(e) => {
                    setFoundProduct({
                      ...foundproduct,
                      lostLocation: e.target.value,
                    });
                  }}
                  required
                />
              </div>
            </div>

            <div className="form-group py-4 pt-5">
              <span> select catagory</span>

              <div className="input-field">
                <select
                  name="catagory"
                  id="catagory"
                  onChange={(e) => {
                    setFoundProduct({
                      ...foundproduct,
                      catagory: e.target.value,
                    });
                  }}
                  className="form-select"
                  aria-label="Default select example">
                  <option>select catagory from below</option>
                  <option>Electronics</option>
                  <option>Animal</option>
                  <option>Clothing</option>
                  <option>Jwellery</option>
                  <option>Personal accesseries</option>
                  <option>car/motorbike accesseries</option>
                </select>
              </div>
            </div>

            <div className="form-group py-4 pt-5">
              <span> Lost Date</span>

              <div className="input-field">
                <input
                  type="text"
                  placeholder="dd/mm/yy "
                  name="lostDate"
                  id="lostDate"
                  onChange={(e) => {
                    setFoundProduct({
                      ...foundproduct,
                      lostDate: e.target.value,
                    });
                  }}
                  required
                />
              </div>
            </div>
            <div className="form-group py-4 pt-5">
              <span> Lost Date</span>

              {/* <div className="input-field">
                <input
                  type="text"
                  placeholder=" "
                  name="userPostId"
                  id="userPostId"
                  value={user.id}
                  // defaultValue={user.id}
                  onChange={(e) => {
                    setFoundProduct({
                      ...foundproduct,
                      userPostId: e.target.value,
                    });
                  }}
                  required
                />
              </div> */}
            </div>
          </div>

          <div className="container text-center">
            <button
              type="submit"
              onClick={handleForm}
              className="btn btn-block text-center my-3">
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

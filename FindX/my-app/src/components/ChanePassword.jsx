import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import url from "../ApiServices/BackEndApi";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function ChanePassword() {
  const history = useHistory();

  const handleform = (e) => {
    e.preventDefault();
    const data = new FormData(document.getElementById("mydata"));
    const passwordData = {
      // oldPassword: data.get("oldPassword"),
      email: data.get("email"),
      newPassword: data.get("newPassword"),
    };
    console.log(passwordData);
    axios.put(`${url}/user/changepassword`, passwordData).then(
      (response) => {
        console.log(response.data);

        toast.success("password changed", {
          position: "top-center",
        });
        history.push("/", { from: "/Chanepassword" });
      },
      (error) => {
        console.log(error);
        toast.error("Invalid old password", {
          position: "top-center",
        });
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="wrapper bg-white ">
        <form className="pt-3" id="mydata">
          <div className="form-group py-4">
            <div className="input-field">
              <span className="fa fa-lock p-2"></span>

              <input
                type="text"
                name="email"
                placeholder=" Enter email "
                required
                className=""
              />
            </div>
          </div>
          <div className="form-group py-1 pb-2">
            <div className="input-field">
              <span className="fa fa-lock p-2"></span>
              <input
                type="password"
                name="newPassword"
                placeholder="Enter new Password"
                required
                className=""
              />
              <button className="btn bg-white text-muted"></button>
            </div>
          </div>
          <div className="container text-center">
            <button
              type="submit"
              onClick={handleform}
              className="btn btn-block text-center my-3">
              change password
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

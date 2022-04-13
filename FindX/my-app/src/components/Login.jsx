import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import axios from "axios";
import url from "../ApiServices/BackEndApi";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const handleform = (e) => {
    e.preventDefault();
    const data = new FormData(document.getElementById("mydata"));
    const loginData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    // e.target.reset();
    console.log(loginData);
    loginRequest(loginData);
  };

  const loginRequest = (loginData) => {
    axios.post(`${url}/user/login`, loginData).then(
      (response) => {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));

        history.push("/", { from: "/login" });

        toast.success("login successfull", {
          position: "top-center",
        });
      },
      (error) => {
        console.log(error);
        toast.error("Invalid Login Details ! try again", {
          position: "top-center",
        });
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="wrapper bg-white ">
        <div className="h2 text-center">FindX</div>
        <div className="h4 text-muted text-center pt-2">
          Enter Your LogIn Details
        </div>
        <form className="pt-3" id="mydata">
          <div className="form-group py-4">
            <div className="input-field">
              <span className="fa fa-user p-2"></span>
              <input
                type="text"
                name="email"
                placeholder=" email "
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
                name="password"
                placeholder="Enter Password"
                required
                className=""
              />
              <button className="btn bg-white text-muted">
                <span className="fa fa-eye-slash"></span>
              </button>
            </div>
          </div>
          <div className="container text-center">
            <button
              type="submit"
              className="btn btn-block text-center my-3"
              onClick={handleform}>
              Log in
            </button>
          </div>
          <div className="text-center pt-3 text-muted">
            <a id="fogpass" href="/">
              Forgotten password?
            </a>
          </div>
          <div className="text-center pt-3 text-muted">
            <Link id="fogpass" to="/signup">
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

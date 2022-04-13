import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import url from "../ApiServices/BackEndApi";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const history = useHistory();

  const handleform = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const User = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    e.target.reset();
    console.log(User);
    RegisterNewUser(User);
  };

  const RegisterNewUser = (User) => {
    axios.post(`${url}/user/register`, User).then(
      (response) => {
        console.log(response);
        history.push("/login", { from: "/signup" });

        toast.success("Your account has been created ! Please login", {
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
        <div className="h2 text-center">FindX</div>
        <div className="h4 text-muted text-center pt-2">
          fill the following details
        </div>
        <form onSubmit={handleform} className="pt-3">
          <div className="form-group py-4">
            <div className="input-field">
              <span className="fa fa-user p-2"></span>
              <input
                type="text"
                placeholder="First Name "
                name="firstName"
                required
              />
            </div>
            <div className="form-group py-4 pt-5">
              <div className="input-field">
                <span className="fa fa-user p-2"></span>
                <input
                  type="text"
                  placeholder="Last Name "
                  name="lastName"
                  required
                  // className=""
                />
              </div>
            </div>
            <div className="form-group py-4">
              <div className="input-field">
                <span className="fa fa-envelope p-2"></span>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  required
                  // className=""
                />
              </div>
            </div>
          </div>
          <div className="form-group py-1 pb-2">
            <div className="input-field">
              <span className="fa fa-unlock p-2"></span>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                className=""
              />
              <button className="btn bg-white text-muted">
                <span className="fa fa-eye-slash"></span>
              </button>
            </div>
          </div>

          <div className="container text-center">
            <button type="submit" className="btn btn-block text-center my-3">
              SignUp
            </button>
          </div>
          <div className="text-center pt-3 text-muted">
            <Link id="fogpass" to="/login">
              Already a member? signIn
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

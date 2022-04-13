import React from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const handleLogout = () => {
    window.localStorage.clear();
    toast.success("you are logged out", {
      position: "top-center",
    });
  };
  const history = useHistory();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h2>
              <b>
                <i>Find-X</i>
              </b>
            </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="/"
                  tabIndex="-1"
                  aria-disabled="true">
                  CONTACT
                </a>
              </li>

              {localStorage.getItem("user") ? (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      RECENT-POSTS
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink to="/showfound" className="dropdown-item">
                          Found Item Posts
                        </NavLink>
                      </li>

                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink to="" className="dropdown-item">
                          Lost Item Posts
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      MY-ACCOUNT
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink
                          to="/ChanePassword"
                          className="dropdown-item"
                          href="/">
                          ChanePassword
                        </NavLink>
                      </li>

                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink
                          to="/login"
                          className="dropdown-item"
                          onClick={handleLogout}>
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
            <form className="d-flex ">
              <div className="container ">
                {localStorage.getItem("user") ? (
                  <></>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn btn-primary mx-2"
                      onClick={() => history.push("/login", { from: "/" })}>
                      LogIn <i className="fa-solid fa-user"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary mx-2"
                      onClick={() => history.push("/signup", { from: "/" })}>
                      SignUp <i className="fa-solid fa-user-plus"></i>
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

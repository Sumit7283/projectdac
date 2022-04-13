import React from "react";
import { useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();

  const handleSignupRequest = () => {
    history.push("/signup", { from: "/" });
  };

  return (
    <>
      <div className="mt-5">
        <section className="">
          <footer
            className="text-center text-white"
            style={{ backgroundColor: "#0a4275" }}>
            <div className="container p-4 pb-0">
              <section className="">
                <p className="d-flex justify-content-center align-items-center">
                  <span className="me-3">Register for free</span>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-rounded"
                    onClick={handleSignupRequest}>
                    Sign up!
                  </button>
                </p>
              </section>
            </div>

            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
              © Copyright 2022 All rights reserved.
            </div>
          </footer>
        </section>
      </div>
    </>
  );
}

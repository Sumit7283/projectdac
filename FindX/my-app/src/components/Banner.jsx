import React from "react";
import Web from "../projectImages/20943459.jpg";
import { useHistory } from "react-router-dom";

export default function Banner() {
  const history = useHistory();

  return (
    <>
      <section className="site-banner">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 site-title my-auto ">
              <h1 className="title-text text-uppercase text-center ">
                <strong>
                  <b> WHEN RECOVERING YOUR ITEMS BECOMES CHILD'S PLAY</b>
                </strong>
              </h1>
              <h6 className="ml-3 mt-4 text-center title-text text-uppercase">
                Hey! Have you Lost or Found Something ? Let Us Help You.
              </h6>
              <div className="site-buttons">
                <div className="d-flex flex-row flex-wrap ">
                  <div className="container text-center  ">
                    <button
                      type="button"
                      onClick={() => history.push("/foundform", { from: "/" })}
                      className="btn btn-primary btn-lg mx-2 mt-4">
                      I have Found
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-lg mx-2  mt-4">
                      I have Lost
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 banner-image ">
              <img
                id="bannerImg"
                src={Web}
                alt="banner-img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

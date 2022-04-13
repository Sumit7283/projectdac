import React from "react";

export default function Faq() {
  return (
    <>
      <hr />
      <div className="main-heading text-center mt-5">
        <h2>
          <b>Frequently Asked Questions (FAQs)</b>
        </h2>
      </div>

      <div className="container-fluid mt-5 mb-5">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne">
                1) How much money will i be costed to use this softer ?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne">
              <div className="accordion-body">
                <strong>
                  There is no need to pay any money.This is absolutely free of
                  cost application.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo">
                2) What do you do with my personal information ?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo">
              <div className="accordion-body">
                <strong>
                  Your personal information is only, used to manage your account
                  with us. We never give or sell your personal information or
                  data to third parties.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree">
                3) What languages does Find-X support?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree">
              <div className="accordion-body">
                <strong>
                  English only. However, we will add other languages as we grow
                  and hustle in the next coming years.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

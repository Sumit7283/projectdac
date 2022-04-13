import React from "react";
export default function HowItWorks() {
  return (
    <>
      <section className="howItWork">
        <div className="work-container container ">
          <h1 className="main-heading text-center ">
            <b>
              HOW <i>FindX</i> HELP YOU
            </b>
          </h1>
          <div className="row p-5">
            <div className="col-12 col-lg-4 text-center work-container-subdiv">
              <i className="far fa-frown-open	 fa-4x fontawesome-style foIcon"></i>
              <h2 className="sub-heading">Lost it ?</h2>
              <p className="main-hero-para w-100">
                Losing your property can be frustrating and is hassle to
                find.But no more worries, at <i>FindX</i> we answer that by
                providing an intelligent lost and found matching system,
              </p>
            </div>
            <div className="col-12 col-lg-4 text-center work-container-subdiv">
              <i className="fa fa-check-square-o	fa-4x foIcon "></i>
              <h2 className="sub-heading">List it !</h2>
              <p className="main-hero-para w-100">
                Just do one thing fill the declaration and give as much detail
                as possible (the location of loss, the type of item, the
                description) to help the algorithm to identify it quickly
              </p>
            </div>
            <div className="col-12 col-lg-4 text-center work-container-subdiv">
              <i className="far fa-grin-alt	 fa-4x foIcon"></i>
              <h2 className="sub-heading">Found it</h2>
              <p className="main-hero-para w-100">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore quam ex dicta totam! Ducimus, quidem obcaecati magnam
                harum, repellendus est odit culpa blanditiis
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

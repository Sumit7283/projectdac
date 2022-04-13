import React from "react";
import Banner from "./Banner";
import Faq from "./Faq";
import Footer from "./Footer";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <HowItWorks />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
}

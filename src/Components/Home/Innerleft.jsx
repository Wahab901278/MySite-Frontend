import React from "react";
import Footer from "./Footer";
import MyPicture from "./MyPicture1.jpeg";
const Innerleft = () => {
  return (
    <div className="innerleft">
      <img src={MyPicture} alt="Myself" className="my-image" />
      <h2 className="my-name-part1">Abdul</h2>
      <h2 className="my-name-part2">Wahab</h2>
      <p id="bluetext">__________</p>
      <div className="details">
        <p className="my-role">Data Enthusiast</p>
        <p className="my-role" id="and-center">
          &
        </p>
        <p className="my-role2">A perpetual learner</p>
      </div>
      <div className="footer1">
        <Footer />
      </div>
    </div>
  );
};

export default Innerleft;

import React from "react";
import Innerleft from "./Innerleft";
import Innerright from "./Innerright";

const Innerbox = () => {
  return (
    <>
      <div className="innerbox">
        <div className="flex">
          <Innerleft />
          <Innerright />
        </div>
      </div>
    </>
  );
};

export default Innerbox;

import React from "react";
import Topnavbar from "../Home/Topnavbar";
import Lfooterc from "./Lfooterc";
import Emailcard from "./Emailcard";

const Contact = () => {
  return (
    <div className="contact-page">
      <Topnavbar />
      <h1 className="contact-h">let's talk</h1>
      <Emailcard />
      <Lfooterc />
    </div>
  );
};

export default Contact;

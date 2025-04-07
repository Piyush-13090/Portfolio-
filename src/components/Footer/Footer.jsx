import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sharma.piyush2024@nst.rishihood.edu.in</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/piyush.__006/?hl=en">
          <Insta color="white" size={"3rem"} />
          </a>
          <Facebook color="white" size={"3rem"} />
          <a href="https://github.com/Piyush-13090">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

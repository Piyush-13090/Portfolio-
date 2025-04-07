import React, { useContext } from "react";
import "./Works.css";
import Scaler from "../../img/Scaler .png";
import Rishihood from "../../img/Rishihood Uni.png";
import Image from "../../img/images.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
          I've worked with dynamic teams at Rishihood University and Scaler School of Technology.
            <br />
            Contributed to impactful projects focused on tech, innovation, and user experience.
            <br />
            Proud to have delivered meaningful results for these forward-thinking institutions.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Scaler} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Rishihood} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Image} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Image} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Image} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;

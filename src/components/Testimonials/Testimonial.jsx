import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/Shourya.jpeg";
import profilePic2 from "../../img/Parth.jpeg";
import profilePic3 from "../../img/Anshuma.jpeg";
import profilePic4 from "../../img/Sanath.jpeg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "Piyush has a strong command over HTML, CSS, and JavaScript, crafting clean, responsive layouts with precision.His React skills bring components to life with smooth functionality and real-time interactivity.Every project reflects a deep understanding of frontend architecture and performance.",
    },
    {
      img: profilePic2,
      review:
        "With a keen eye for design, Piyush uses Figma to build UI/UX that’s both elegant and user-friendly.He bridges the gap between design and development effortlessly, translating wireframes into pixel-perfect interfaces.His attention to usability ensures a smooth experience across all devices.",
    },
    {
      img: profilePic3,
      review:
        "From frontend magic to backend logic in Python, Piyush handles front-end challenges with ease and clarity.",
    },
    {
      img: profilePic4,
      review:
      "Piyush brings both technical and creative thinking to every project.He doesn’t just write code — he builds experiences that are fast, functional, and visually engaging.His ability to think from both a developer and a user perspective sets his work apart.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

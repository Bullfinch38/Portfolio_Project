import React from "react";
import "./header.css";
import CTA from "./CTA";
import KS_photo_1 from "../../assets/KS_photo_1.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello! I'm</h5>
        <h1>Konstantin Snigirev</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="KS_photo_1">
          <img src={KS_photo_1} alt="" />
        </div>

        <a href="#contacts" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

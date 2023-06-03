import React  from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
    return(
      <div className="header flex flex-col" id="header">
       <Navbar />
        <div className="container flex">
          <div className="header-content">
            <h2 className="text-uppercase text-white op-07 fw-06 ls-2">Desenvolvedor Full Stack Web, Desenvolvedor Mobile</h2>
          <h1 className="text-white fw-6 header-title">Hello, I'm <span className="text-brown">Dev Full Stack Web, living in Paraná, Brasil</span></h1>
          <div className="btn-groups flex">
           <a href="https://github.com/tonetlucas"><button className="btn-item bg-brown fw-4 ls-2">See Works</button></a>
            <a href="https://www.instagram.com/dev_tonet/"><button className="btn-item bg-dark fw-4 ls-2">Contact Me</button></a>
          </div>
          </div>
        </div>
      </div>
    )
}

export default Header
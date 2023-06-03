import React from "react";
import "./Work.css";
import {BsPlusLg} from "react-icons/bs";
import Project1 from "../../assets/images/project-1.png";
import Project2 from "../../assets/images/project-2.png";
import Project3 from "../../assets/images/project-3.png";
import Project4 from "../../assets/images/project-4.png";
import Project5 from "../../assets/images/project-5.png";

const Work = () => {
    return(
        <div className="work section-p bg-grey" id="work">
            <div className="container">
                <div className="work-content">
                    <div className="section-title">
                        <h3 className="text-brown">latest <span className="text-dark">works</span></h3>
                        <p className="text">Alguns dos meus projetos!</p>
                    </div>

                    <div className="work-list grid">
                    <div className="work-item text-center">
                        <img src={Project1} alt="" />
                        <span className="work-item-icon">
                            <a href="https://rickandmortyprojec.netlify.app/"><BsPlusLg size={38} className="text-brown"/></a>
                        </span>
                    </div>

                    <div className="work-item text-center">
                        <img src={Project2} alt="" />
                        <span className="work-item-icon">
                            <a href="https://tonetlucas.github.io/Calculadora/"><BsPlusLg size={38} className="text-brown"/></a>
                        </span>
                    </div>

                    <div className="work-item text-center">
                        <img src={Project3} alt="" />
                        <span className="work-item-icon">
                           <a href="https://tonetlucas.github.io/mario/"><BsPlusLg size={38} className="text-brown"/></a>
                        </span>
                    </div>

                    <div className="work-item text-center">
                        <img src={Project4} alt="" />
                        <span className="work-item-icon">
                            <a href="https://tonetlucas.github.io/Front-end/tela-login/index.html"><BsPlusLg size={38} className="text-brown"/></a>
                        </span>
                    </div>

                    <div className="work-item text-center">
                        <img src={Project5} alt="" />
                        <span className="work-item-icon">
                            <a href="https://tonetlucas.github.io/Front-end/cubo/index.html"><BsPlusLg size={38} className="text-brown"/></a>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
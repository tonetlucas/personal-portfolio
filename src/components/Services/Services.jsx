import React from "react";
import "./Services.css";
import Service1 from "../../assets/images/front-end-banner.jpg";
import Service2 from "../../assets/images/back-end.png";
import Service3 from "../../assets/images/mobile.jpg";

const Services = () => {
    return(
        <div className="services section-p" id="services">
            <div className="container">
                <div className="services-content">
                    <div className="section-title">
                        <h3 className="text-brown">My <span className="text-dark">Services</span></h3>
                        <p className="text">Oferecendo soluções para seu negócio digital</p>
                    </div>

                    <div className="services-list grid">
                       <div className="services-item text-center">
                        <div className="services-item-img">
                            <img src={Service1} className="mx-auto" alt=""/>
                            <h3 className="text-black">Front end Web</h3>
                            <p className="text fw-3 ls-1">Dev Front End, especializado em HTML, CSS e JS. Utilizando frameworks como React.JS e Vue.JS</p>
                        </div>

                        <div className="services-item-img">
                            <img src={Service2} className="mx-auto" alt=""/>
                            <h3 className="text-black">Back end Web</h3>
                            <p className="text fw-3 ls-1">Dev Back End, especializado em PHP, MYSQL e PYTHON</p>
                        </div>

                        <div className="services-item-img">
                            <img src={Service3} className="mx-auto" alt=""/>
                            <h3 className="text-black">Desenvolvedor Mobile</h3>
                            <p className="text fw-3 ls-1">Dev Mobile, especializado em React Native</p>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
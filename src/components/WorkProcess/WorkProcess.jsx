import React from "react";
import "./WorkProcess.css";

const WorkProcess = () => {
    return(
        <div className="workprocess section-p bg-white">
            <div className="container">
                <div className="workprocess-content">
                    <div className="section-title">
                        <h3 className="text-brown">working <span className="text-dark">process</span></h3>
                        <p className="text fs-18">Sou um aluno da escola Sesc Senac, curso ensino médio integrado ao técnico de desenvolvedor para internet. Atualmente tenho 17 anos e sonho trabalhar com desenvolvimento Web</p>
                    </div>

                    <div className="workprocess-list grid">
                    <h2 className="text-brown fw-7">01 <span  className="text-dark fw-5">Dev Front End</span></h2>
                    <p>Estudo a parte de front end a três anos e possuo conhecimento em HTML, CSS, JS e alguns frameworks. Aprendi essas linguagens na escola e também com o curso do Gustavo Guanabara. Realizei curso de ReactJS com o canal Matheus Battist e cursei VueJS com o canal Tiago Matos.
                    </p>
                    </div>

                    <div className="workprocess-list grid">
                    <h2 className="text-brown fw-7">02 <span  className="text-dark fw-5">Dev Back End</span></h2>
                    <p>Estudo a Parte de Back end a dois anos e possuo as linguagens PHP, PYTHON e MYSQL.Vi um pouco sobre essa matéria em minha escola e me interessei e fui descobrir um pouco mais com os videos do canal Curso em Vídeo.</p>
                    </div>

                    <div className="workprocess-list grid">
                    <h2 className="text-brown fw-7">03 <span  className="text-dark fw-5">Dev Mobile</span></h2>
                    <p>Atualmente estou aprendendo React Native com o canal Onebitcode e me interessei e muito sobre esse Framework1.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkProcess;
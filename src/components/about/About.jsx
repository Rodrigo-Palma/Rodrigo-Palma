import React from "react";
import Social from "../Social";
//import Testimonials from "../../components/testimonial/Testimonial";
import Services from "../../components/service/Service";
import Awards from "../../components/award/Awards";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.jpg" alt="about" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Cientista de Dados</p>
                  <h3>Rodrigo Palma</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div className="col-lg-7 ml-auto">
              <div className="about-info">
                <div className="title">
                  <h3>Biografia</h3>
                </div>
                <div className="about-text">
                  <p>
                    Sou um entusiasta no campo de Ciência de Dados, pronto para embarcar em desafios enriquecedores. 
                    E estou comprometido em desenvolver minhas habilidades na análise de dados 
                    para contribuir com empresas e projetos notáveis em escala global. Estou animado para colaborar com equipes talentosas 
                    e abraçar novas oportunidades neste empolgante universo dos dados.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Nome: </label>
                          <span>Rodrigo Palma</span>
                        </li>
                        <li>
                          <label>Interesses: </label>
                          <span>Ciência de dados, Inteligência artifical, Big Data, Mercado Financeiro, Blockchain</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>+55 (53) 99957-7605</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>email.rodrigopalma@gmail.com</span>
                        </li>
                        <li>
                          <label>Github: </label>
                          <span>Rodrigo-Palma</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          <div className="title">
            <h3>O que eu faço??</h3>
          </div>
          <Services />
          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Certificações.</h3>
          </div>
          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          {/*    
          <div className="title">
            <h3>Recomendações.</h3>
          </div>
          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;

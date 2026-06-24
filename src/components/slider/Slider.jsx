import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+55 53-99957-7605",
  email: " email.rodrigopalma@gmail.com",
};

const sliderContent = {
  name: "Rodrigo Palma",
  description: `Especializado em análise de dados, modelagem estatística, aprendizado de máquina, inteligência artificial e big data.
  Também presto consultoria financeira, com otimização de portfólio, análise de riscos, investimentos em renda variável e criptomoedas, 
  com foco na criação de renda passiva e liberdade financeira.`,
  btnText: " Download CV",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+55 (53) 99957-7605">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:email.rodrigo@gmail.com,com">
              {conctInfo.email}
            </a>
          </div>
          {/* para site bilingue no futuro
          <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <a href="#">EN</a>
              </li>
              <li>
                <a href="#">PT</a>
              </li>
            </ul>
          </div>
          */}
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6>Hello, My name is</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                    <p className="loop-text lead"> Cientista/Analista de Dados</p>
                    <p className="loop-text lead"> Certificado pela Microsoft</p>
                    <p className="loop-text lead"> Especialista em Dados</p>
                </TextLoop>{" "}
                <p className="desc">{sliderContent.description}</p>
                <div className="mt-4">
                  <a
                    className="px-btn px-btn-white"
                    href="img/resume.pdf"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/home-banner.jpg"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;

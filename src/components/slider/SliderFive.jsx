import React from "react";
import TextLoop from "react-text-loop";

const sliderContent = {
  name: "Rodrigo Palma",
  description: `Especializado em análise de dados, modelagem estatística, aprendizado de máquina, inteligência artificial e big data.
  Também presto consultoria financeira, com otimização de portfólio, análise de riscos, investimentos em renda variável e criptomoedas, 
  com foco na criação de renda passiva e liberdade financeira.`,
  btnText: "HIRE ME",
  btnText2: "My Work",
};

const SliderFive = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner home-banner-two slider-four bg-normal"
      >
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <div className="type-box">
                <h6>Olá...</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                    <p className="loop-text lead"> Cientista/Analista de Dados</p>
                    <p className="loop-text lead"> Certificado pela Microsoft</p>
                    <p className="loop-text lead"> Especialista em Dados</p>
                </TextLoop>{" "}
                <p className="desc">{sliderContent.description}</p>
                <div className="d-flex btn-wrapper">
                  <a className="px-btn px-btn-theme mr-4" href="#work">
                    {sliderContent.btnText2}
                  </a>
                  <a className="px-btn btn-outline " href="#contactus">
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-md-6 order-1 order-md-2">
              {/*<img src="img/slider/home-professional-2.png" alt="about image" />*/}
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div className="go-to go-to-next">
          <a href="#about">
            <span></span>
          </a>
        </div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderFive;

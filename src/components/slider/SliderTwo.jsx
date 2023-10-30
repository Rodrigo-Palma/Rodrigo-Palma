import React from "react";
import TextLoop from "react-text-loop";

const sliderContent = {
  name: "Rodrigo Palma",
  description: `Especializado em análise de dados, modelagem estatística, aprendizado de máquina, inteligência artificial e big data.
  Também presto consultoria financeira, com otimização de portfólio, análise de riscos, investimentos em renda variável e criptomoedas, 
  com foco na criação de renda passiva e liberdade financeira.`,
  btnText: " Download CV",
};

const SliderTwo = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner home-banner-two"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/slider/home-banner-2.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-12">
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
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderTwo;

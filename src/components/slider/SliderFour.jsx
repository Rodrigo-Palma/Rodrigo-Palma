import React from "react";
import TextLoop from "react-text-loop";

const sliderContent = {
  name: "Rodrigo Palma",
  description: `Especializado em análise de dados, modelagem estatística, aprendizado de máquina, inteligência artificial e big data.
  Também presto consultoria financeira, com otimização de portfólio, análise de riscos, investimentos em renda variável e criptomoedas, 
  com foco na criação de renda passiva e liberdade financeira.`,
  btnText: " Download CV",
  btnText2: "Portfólio",
};

const SliderFour = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner home-banner-two slider-four"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/slider/home-professional.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-12">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Olá, eu me chamo
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead"> Cientista/Analista de Dados</p>
                    <p className="loop-text lead"> Certificado pela Microsoft</p>
                    <p className="loop-text lead"> Especialista em Dados</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div className="d-flex btn-wrapper">
                  <a
                    className="px-btn px-btn-theme mr-4"
                    href="img/resume.pdf"
                    download
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    {sliderContent.btnText}
                  </a>
                  <a
                    className="px-btn btn-outline"
                    href="#work"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="500"
                  >
                    {sliderContent.btnText2}
                  </a>
                </div>
              </div>
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

export default SliderFour;

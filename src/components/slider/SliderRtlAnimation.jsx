import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+55 53-99957-7605",
  email: "email.rodrigopalma@gmail.com",
};

const sliderContent = {
  name: "Rodrigo Palma",
  designation: "Data Scientist",
  description: `Especializado em análise de dados, modelagem estatística, aprendizado de máquina, inteligência artificial e big data.
  Também presto consultoria financeira, com otimização de portfólio, análise de riscos, investimentos em renda variável e criptomoedas, 
  com foco na criação de renda passiva e liberdade financeira.`,
  btnText: " Donwload CV",
};

const SliderRtlAnimation = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+55 53-99957-7605">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:email.rodrigopoalma@gmail.com,com">
              {conctInfo.email}
            </a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                {/*<a href="#">EN</a>*/} 
              </li>
              <li>
                {/*<a href="#">PT</a>*/} 
              </li>
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello, My name is
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
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
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
              process.env.PUBLIC_URL + "img/slider/home-banner-rtl.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderRtlAnimation;

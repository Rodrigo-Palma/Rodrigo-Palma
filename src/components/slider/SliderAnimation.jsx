import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+55 53-99957-7605",
  email: " email.rodrigopalma@gmail.com",
};

const sliderContent = {
  name: "Rodrigo Palma",
  designation: "AI Engineer",
  description: `I build end-to-end AI systems — from data pipelines to LLMs and RAG agents — running in production.
  Azure Data Scientist (DP-100) & Microsoft Fabric (DP-600) certified. Open to remote AI / Data Engineering
  roles worldwide.`,
  btnText: "Download CV",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+55 (53) 99957-7605">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:email.rodrigopalma@gmail.com,com">
              {conctInfo.email}
            </a>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hi, my name is
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
                    <p className="loop-text lead"> AI Engineer</p>
                    <p className="loop-text lead"> LLM / RAG &amp; MLOps</p>
                    <p className="loop-text lead"> Data Engineer</p>
                    <p className="loop-text lead"> Azure Data Scientist (DP-100)</p>
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

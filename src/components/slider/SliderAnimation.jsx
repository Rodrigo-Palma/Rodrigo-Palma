import React from "react";
import TextLoop from "react-text-loop";
import usePrefersReducedMotion from "../usePrefersReducedMotion";

const conctInfo = {
  phone: "+55 53-99957-7605",
  phoneHref: "tel:+5553999577605",
  email: "email.rodrigopalma@gmail.com",
};

const sliderContent = {
  name: "Rodrigo Palma",
  designation: "AI Engineer",
  description: `I build end-to-end AI systems — from data pipelines to LLMs and RAG agents — running in production.
  Azure Data Scientist (DP-100) & Microsoft Fabric (DP-600) certified. Open to remote AI / Data Engineering
  roles worldwide.`,
  btnText: "Download CV",
};

const ROLE_PHRASES = [
  "AI Engineer",
  "LLM / RAG & MLOps",
  "Data Engineer",
  "Azure Data Scientist (DP-100)",
];

// The rotating phrases never stop on their own (WCAG 2.2.2), so under
// reduced motion they are shown together as a single static line.
const RolePhrases = () => {
  const isReducedMotion = usePrefersReducedMotion();

  if (isReducedMotion) {
    return <p className="loop-text lead">{ROLE_PHRASES.join(" · ")}</p>;
  }

  return (
    <TextLoop>
      {ROLE_PHRASES.map((phrase) => (
        <p className="loop-text lead" key={phrase}>
          {" "}
          {phrase}
        </p>
      ))}
    </TextLoop>
  );
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href={conctInfo.phoneHref}>{conctInfo.phone}</a>
            <a href={`mailto:${conctInfo.email}`}>{conctInfo.email}</a>
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
                  <RolePhrases />
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
              process.env.PUBLIC_URL + "/img/slider/home-banner.webp"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;

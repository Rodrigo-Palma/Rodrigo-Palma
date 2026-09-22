import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
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
                  <p>AI Engineer</p>
                  <h3>Rodrigo Palma</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>About Me</h3>
                </div>
                <div className="about-text">
                  <p>
                    I&apos;m an AI &amp; Data Engineer who builds end-to-end systems — from
                    data pipelines and warehouses to machine learning and modern GenAI
                    (RAG, agents, fine-tuning) — and ships them to production. I care
                    about reliable, well-tested software and turning data into decisions.
                  </p>
                  <p>
                    Azure Data Scientist (DP-100) and Microsoft Fabric (DP-600) certified,
                    with an MSc in Big Data &amp; Business Intelligence. Currently open to
                    remote AI / Data Engineering roles worldwide.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Rodrigo Palma</span>
                        </li>
                        <li>
                          <label>Focus: </label>
                          <span>AI Engineering, LLMs / RAG, MLOps, Data Engineering</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Location: </label>
                          <span>Brazil — open to remote / relocation</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>email.rodrigopalma@gmail.com</span>
                        </li>
                        <li>
                          <label>GitHub: </label>
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
            <h3>What I do</h3>
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
            <h3>Certifications</h3>
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

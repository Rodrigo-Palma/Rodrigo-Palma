import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Data & AI Engineer`,
    jobType: `On-site | Remote`,
    jobDuration: `2024 - Present`,
    timeDuraton: `Full-time`,
    compnayName: "Public Defender's Office of Rio Grande do Sul (DPE-RS)",
    jobDescription: `Modernized the data stack (resilience and reliability) and built modern,
    interactive dashboards powered by AI and NLP. Designed new ETL pipelines that unlocked
    previously unavailable data, and quantified the productivity of staff with real data to
    support decisions informing a 9-figure budget. Drove a data-driven culture across the
    organization.`,
  },
  {
    jobPosition: `Judicial Technician`,
    jobType: `On-site`,
    jobDuration: `2017 - 2024`,
    timeDuraton: `Full-time`,
    compnayName: "Court of Justice of Rio Grande do Sul (TJRS)",
  },
  {
    jobPosition: `Banking Clerk`,
    jobType: `On-site`,
    jobDuration: `2015 - 2017`,
    timeDuraton: `Full-time`,
    compnayName: "Banco do Brasil S/A",
  },
  {
    jobPosition: `Co-founder & Full-Stack Developer`,
    jobType: `On-site | Remote`,
    jobDuration: `2009 - 2014`,
    timeDuraton: `Full-time`,
    compnayName: "JogoMuitoOnline (Palma & Oliveira Ltda)",
    jobDescription: `Built and ran an e-commerce business end to end: web development, cloud
    infrastructure and payments. ~5 years shipping full-stack software as a founder.`,
  },
];

const educatonContent = [
  {
    passingYear: "2023-2025",
    degreeTitle: "MSc — Big Data & Business Intelligence",
    instituteName: "ENEB — European Business School of Barcelona",
  },
  {
    passingYear: "2020-2024",
    degreeTitle: "BSc — Computer Engineering",
    instituteName: "Universidade Cruzeiro do Sul",
  },
  {
    passingYear: "2022-2023",
    degreeTitle: "MBA — Technology for Business: AI, Data Science & Big Data",
    instituteName: "Faculdade Única",
  },
  {
    passingYear: "2023",
    degreeTitle: "Postgraduate — Artificial Intelligence",
    instituteName: "Faculdade Iguaçu",
  },
  {
    passingYear: "2022",
    degreeTitle: "Postgraduate — Big Data & Data Science",
    instituteName: "Faculdade Única",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <h3>Education &amp; Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;

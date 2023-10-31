import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Técnico Judiciário - Secretário de Juiz`,
    jobType: `Presencial | Remoto`,
    jobDuration: `Set 2017 - Atual`,
    timeDuraton: `Tempo Integral`,
    compnayName: "Tribunal de Justiça do Rio Grande do Sul",
    jobDescription: `No papel de Assistência Direta ao Juiz, atuo na elaboração de minutas complexas de decisões e sentenças judiciais em
    conformidade com leis e normativas complexas. Presto suporte no acompanhamento de processos, garantindo eficiência e
    integridade. Acompanho prazos, oriento partes interessadas, colaborando com equipes multidisciplinares, incluindo
    magistrados, servidores e advogados`
  },
  {
    jobPosition: `Escriturário Concursado`,
    jobType: `Presencial`,
    jobDuration: `Mai 2015 - Ago 2017`,
    timeDuraton: `Tempo Integral`,
    compnayName: "Banco do Brasil S/A.",
    jobDescription: `Gestão da Carteira Varejo: Destaco meu papel na Gestão da Carteira Varejo, com foco na carteira agropecuária. Estabeleci sólidos relacionamentos
    com clientes, conduzindo negociações eficazes. Gerenciei operações de investimento e custeio, alcançando metas com
    aumento de mais 128% no último semestre.
`,
  },
  {
    jobPosition: `Ex-sócio Administrador`,
    jobType: `Presencial | Remoto`,
    jobDuration: `Jun 2009 - Nov 2014`,
    timeDuraton: `Tempo Integral`,
    compnayName: "www.JogoMuitoOnline.com.br (Palma & Oliveira LTDA)",
    jobDescription: `Como empresário, atuei em criando e gerenciando uma empresa especializada em venda de jogos, livros e Magic: The
    Gathering. Supervisionei operações diárias, estratégias de vendas, e desenvolvi soluções web, infraestrutura em nuvem e
    e-commerce. Mantive parcerias estratégicas, liderando campanhas de marketing que resultaram em um prêmio "TOP 3"
    como maior revendedor LevelUP! na América Latina em 2011 e uma alta taxa de aprovação no PagSeguro.`
  },
];

const educatonContent = [
  {
    passingYear: "2023-2025",
    degreeTitle: "Mestrado - Big Data e Business Intelligence",
    instituteName: "ENEB - Escola de Negócios Europeia de Barcelona",
  },
  /*{
    passingYear: "2022-2022",
    degreeTitle: "Pós-graduação Lato Sensu - Especialização - Big Data e Ciência de Dados",
    instituteName: "Faculdade Única",
  },*/
  {
    passingYear: "2022-2023",
    degreeTitle: "Pós-graduação Lato Sensu - MBA - Tecnologia para Negócios: Inteligência Artificial (IA), Data Science e Big Data",
    instituteName: "Faculdade Única",
  },
  {
    passingYear: "2023-2023",
    degreeTitle: "Pós-graduação Lato Sensu - Especialização - Inteligência Artificial",
    instituteName: "Univitória EAD",
  },
  {
    passingYear: "2020-2023",
    degreeTitle: "Técnologo - Gestão da Tecnologia da Informação",
    instituteName: "Cruzeiro do Sul Virtual",
  },
  /*{
    passingYear: "2020-2022",
    degreeTitle: "Associate Degree - Information Technology Management"
    instituteName: "Cruzeiro do Sul Virtual",
  },
  {
    passingYear: "1997-2003",
    degreeTitle: "Bachelor Degree - Psychology",
    instituteName: "Universidade da Região da Campanha - URCAMP",
  }, */
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experiência.</h3>
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
            <h3>Educação & Habilidades.</h3>{" "}
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

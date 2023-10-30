import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Técnico Judiciário - Secretário de Juiz`,
    jobType: `Presencial | Remoto`,
    jobDuration: `Set 2017 - Atual`,
    timeDuraton: `Tempo Integral`,
    compnayName: "Tribunal de Justiça do Rio Grande do Sul",
    jobDescription: `Assistência Direta ao Juiz:
    - Atuação como elo vital entre o juiz e partes envolvidas, gerenciando a comunicação, agendas e compromissos.
    - Prestação de suporte no acompanhamento processual e gestão de prazos, assegurando a eficiência e integridade dos processos judiciais.
    - Preparação e revisão de documentos legais, petições, despachos e demais correspondências, garantindo a precisão e conformidade com normativas jurídicas de alta complexidade.
    - Acompanhamento e monitoramento de prazos processuais, decisões judiciais e atividades relacionadas ao cargo.
    - Prestação de atendimento profissional e cortês a partes interessadas e advogados, fornecendo informações e orientações relevantes sobre processos judiciais.
    - Trabalho colaborativo com equipes multidisciplinares, incluindo magistrados, advogados, servidores e demais profissionais envolvidos no processo judicial.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Escriturário Concursado`,
    jobType: `Presencial`,
    jobDuration: `Mai 2015 - Ago 2017`,
    timeDuraton: `Tempo Integral`,
    compnayName: "Banco do Brasil S/A.",
    jobDescription: `Gestão da Carteira Varejo:
    - Administração e acompanhamento da carteira varejo, com especial atenção à carteira agropecuária.
    - Estabelecimento de relacionamento sólido com os clientes, compreendendo suas necessidades financeiras.
    - Realização de negociações assertivas para oferecer soluções adequadas às demandas dos clientes.
    Operacionalização de Operações de Investimento e Custeio:
    - Execução e acompanhamento das operações de investimento, proporcionando suporte eficaz aos clientes interessados.
    - Gerenciamento operacional de operações de custeio, assegurando o correto fluxo dos processos.
    - Assessoria e informações detalhadas sobre produtos e serviços bancários disponíveis.
    Esclarecimento de dúvidas e auxílio na escolha das melhores opções de investimento e custeio conforme os objetivos dos clientes.
    - Fornecimento de um atendimento personalizado, visando a satisfação e fidelização dos clientes.
    Abordagem proativa para oferecer soluções financeiras alinhadas com as necessidades e metas dos clientes.
    - Entrega das metas acima do esperado - +128% no último semestre trabalhado no banco com mais de 60% da carteira agro sendo segmentada em nível acima (personalizado).`,
    delayAnimation: "",
  },
  {
    jobPosition: `Ex-sócio Administrador`,
    jobType: `Presencial | Remoto`,
    jobDuration: `Jun 2009 - Nov 2014`,
    timeDuraton: `Tempo Integral`,
    compnayName: "www.JogoMuitoOnline.com.br (Palma & Oliveira LTDA)",
    jobDescription: `- Responsável pela administração e operação de uma empresa especializada na venda de jogos de computador, itens, serial-keys e powerups; livraria; Magic: The Gathering.
    - Supervisão das operações diárias, gestão de estoque, estratégias de vendas e relacionamento com os clientes, comunidades gamers.
    - Desenvolvimento e implementação de estratégias para maximizar o desempenho de vendas e alcançar metas financeiras.
    - Desenvolvimento Web, Infraestrutura de Nuvem, Banco de dados, E-commerce.
    - Manutenção de parcerias estratégicas com fornecedores e negociação de termos contratuais para garantir margens adequadas de lucro.
    - Participação ativa na concepção e execução de campanhas de marketing para promover os produtos e aumentar a visibilidade da marca no mercado.
    + de 10.000 clientes.
    - Prêmio - TOP 3 - Maior revendedor LevelUP! da América Latina em 2011.
    - Índice de aprovação/recomendação acima de 98% no Pagseguro.`,
    delayAnimation: "",
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

import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Ciêcia de dados",
    descriptions: `● Estratégias Avançadas de Mineração de Dados;
    ● Desenvolvimento e Implementação de Modelos de Machine Learning;
    ● Visualização e Interpretação Avançada de Dados;
    ● Colaboração Efetiva com Equipes Interdisciplinares;
    ● Interpretação e Comunicação de Insights Complexos;
    ● Avaliação de Impacto e Relevância de Dados`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Análise de Dados",
    descriptions: `● Coleta, Limpeza e Pré-processamento de Dados;
    ● Análise Estatística e Exploratória de Dados;
    ● Desenvolvimento de Relatórios e Dashboards;
    ● Colaboração Eficiente com Stakeholders;
    ● Geração de Relatórios e Dashboards;
    ● Assessoria na Tomada de Decisões;
    ● Monitoramento Contínuo`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Inteligência Artificial",
    descriptions: `● Implementação de Algoritmos de Inteligência Artificial;
    ● Construção e Treinamento de Modelos de Aprendizado de Máquina;
    ● Otimização de Algoritmos para Desempenho e Eficiência;
    ● Integração de Soluções de IA em Aplicações e Sistemas;
    ● Pesquisa e Aplicação de Tecnologias Emergentes em IA`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}

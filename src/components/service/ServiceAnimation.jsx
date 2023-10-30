import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Ciêcia de dados",
    descriptions: `Coleta, processamento e transformação de grandes volumes de dados;
    Resolução de problemas empresariais utilizando técnicas baseadas em dados;
    Modelagem Estatística, Modelagem Preditiva;
    Consultoria em Estratégia de Dados, Soluções em Inteligência de Mercado;
    Análise de Riscos e Fraudes`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Análise de Dados",
    descriptions: `Análise Descritiva e Exploratória de dados, limpeza, pré-processamento, transformação e normalização de dados;
    Visualização de dados, relatórios e apresentações;
    Assessoria na tomada de decisões, monitoramento e atualização contínua bem como criação de Dashboards.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Consultoria Financeira e criptomoedas",
    descriptions: `Definição de perfil de investidor;
    Montagem e otimização de carteira de investimentos;
    Estratégias de Investimento em renda variável e criptomoedas;
    Análise e Gerenciamento de risco;
    Estratégias de renda passiva e liberdade financeira.`,
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

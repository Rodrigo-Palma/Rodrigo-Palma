import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "● Ciência de Dados ● Análise de Dados",
    numberPercent: "95",
    startCount: "0",
    endCount: "95",
  },
  {
    name: "● Inteligência Artificial (IA) ● Aprendizado de Máquina ● Aprendizado Profundo",
    numberPercent: "92",
    startCount: "0",
    endCount: "92",
  },
  {
    name: "● Programação (Python, R, SQL, NoSQL, Javascript)",
    numberPercent: "89",
    startCount: "0",
    endCount: "89",
  },
  {
    name: "● Visualização de Dados ● Power BI ● Tableau",
    numberPercent: "93",
    startCount: "0",
    endCount: "93",
  },
  {
    name: "● Big Data ● Hadoop ● Spark",
    numberPercent: "92",
    startCount: "0",
    endCount: "92",
  },
  {
    name: "● Resolução de Problemas",
    numberPercent: "92",
    startCount: "0",
    endCount: "92",
  },
  {
    name: "● Mercado Financeiro ● Renda Variável ● Renda Fixa ● Derivativos ● Criptomoedas",
    numberPercent: "93",
    startCount: "0",
    endCount: "93",
  },
  {
    name: "● Clouding ● AWS ● Azure",
    numberPercent: "88",
    startCount: "0",
    endCount: "88",
  },
];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              {<CountUp
                start={focus ? skill.startCount : null}
                end={skill.endCount}
                duration={1}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
                  </CountUp>
              }
            </span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  );
};

export default Skills;

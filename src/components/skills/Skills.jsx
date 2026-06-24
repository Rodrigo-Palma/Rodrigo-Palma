import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "● AI / LLMs ● RAG ● Agents ● Fine-tuning",
    numberPercent: "93",
    startCount: "0",
    endCount: "93",
  },
  {
    name: "● Machine Learning ● Deep Learning (PyTorch)",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "● Programming (Python, SQL, JavaScript/TypeScript)",
    numberPercent: "92",
    startCount: "0",
    endCount: "92",
  },
  {
    name: "● Data Engineering ● Spark ● dbt ● Airflow ● Kafka",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "● MLOps ● Docker ● Kubernetes ● CI/CD ● MLflow",
    numberPercent: "88",
    startCount: "0",
    endCount: "88",
  },
  {
    name: "● Cloud ● AWS ● Azure",
    numberPercent: "88",
    startCount: "0",
    endCount: "88",
  },
  {
    name: "● Data Visualization ● Power BI ● Microsoft Fabric",
    numberPercent: "92",
    startCount: "0",
    endCount: "92",
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

import React from "react";

const ServiceContent = [
  {
    icon: "icon-target",
    title: "AI / GenAI Engineering",
    descriptions: `● LLM applications: RAG, agents and tool use;
    ● Fine-tuning (LoRA) and model adaptation;
    ● Evals, guardrails and hallucination checks;
    ● Local-first and API-based deployments`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Data Engineering",
    descriptions: `● Batch & streaming pipelines (Spark, Kafka);
    ● ELT with dbt; warehouses & lakehouses;
    ● Data modeling and data quality;
    ● Orchestration (Airflow) and reliability`,
    delayAnimation: "200",
  },
  {
    icon: "icon-mobile",
    title: "ML & MLOps",
    descriptions: `● Model development and evaluation;
    ● Serving (FastAPI), Docker & Kubernetes;
    ● CI/CD, experiment tracking (MLflow);
    ● Monitoring and deployment on AWS / Azure`,
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

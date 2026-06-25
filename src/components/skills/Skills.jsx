import React from "react";

// Recruiter-friendly: grouped skills, no self-assigned proficiency scores or bars.
const skillGroups = [
  {
    title: "AI / GenAI",
    items: ["LLMs", "RAG", "Agents", "LoRA fine-tuning", "LLM Evals", "Guardrails", "Vector DBs"],
  },
  {
    title: "Machine Learning",
    items: ["PyTorch", "scikit-learn", "XGBoost", "Time Series", "NLP"],
  },
  {
    title: "Data Engineering",
    items: ["Spark", "dbt", "Airflow", "DuckDB", "Kafka", "Warehouses / Lakehouses"],
  },
  {
    title: "MLOps & Cloud",
    items: ["Docker", "Kubernetes", "Terraform", "MLflow", "CI/CD", "AWS", "Azure"],
  },
  {
    title: "Languages",
    items: ["Python", "SQL", "JavaScript / TypeScript"],
  },
  {
    title: "BI",
    items: ["Power BI", "Microsoft Fabric"],
  },
];

const pillStyle = {
  display: "inline-block",
  padding: "5px 13px",
  margin: "0 6px 8px 0",
  fontSize: "14px",
  lineHeight: 1.4,
  borderRadius: "20px",
  color: "#e6edf3",
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  whiteSpace: "nowrap",
};

const titleStyle = {
  display: "inline-block",
  margin: "0 0 10px",
  paddingBottom: "4px",
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "#f9a23c",
  borderBottom: "2px solid rgba(249, 162, 60, 0.35)",
};

const Skills = () => (
  <div className="skills-grouped">
    {skillGroups.map((group, i) => (
      <div className="skill-group" key={i} style={{ marginBottom: "20px" }}>
        <h6 style={titleStyle}>{group.title}</h6>
        <div>
          {group.items.map((item, j) => (
            <span key={j} style={pillStyle}>
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Skills;

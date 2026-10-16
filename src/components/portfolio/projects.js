// Single source of truth for portfolio projects. Each project lists the
// categories (tabs) it belongs to; the tabs are derived from this list.
export const projects = [
  {
    img: "/img/portfolio/edgar-rag.webp",
    width: 1200,
    height: 640,
    title: "edgar-rag — Cited QA over SEC 10-K filings",
    subTitle:
      "Pre-registered eval: 13 of 300 unanswerable questions answered with no gate (4.3%)",
    alt: "Terminal output of make result in edgar-rag: false answers, recall cost and generator seconds per question for six gating arms over 300 unanswerable and 180 answerable questions, followed by the H1 and H2 readings, both not met",
    delayAnimation: "",
    portfolioLink: "https://github.com/Rodrigo-Palma/edgar-rag",
    cats: ["AI / GenAI"],
  },
  {
    img: "/img/portfolio/quantlens.png",
    width: 1200,
    height: 675,
    title: "QuantLens — AI Quant Analyst (B3)",
    subTitle: "Local-first LLM + RAG + evals (Python/FastAPI)",
    alt: "QuantLens card: AI quant analyst for the Brazilian stock market, built with Python, FastAPI, Ollama, RAG and evals in CI",
    delayAnimation: "100",
    portfolioLink: "https://github.com/Rodrigo-Palma/quantlens",
    cats: ["AI / GenAI"],
  },
  {
    img: "/img/portfolio/anchora.png",
    width: 1200,
    height: 675,
    title: "anchora — Offline RAG for Brazilian Public-Law",
    subTitle: "Cited, domain-grounded answers (local-first)",
    alt: "anchora card: offline RAG over Brazilian public-law documents with cited, local-first answers",
    delayAnimation: "200",
    portfolioLink: "https://github.com/Rodrigo-Palma/anchora",
    cats: ["AI / GenAI"],
  },
  {
    img: "/img/portfolio/market-elt.png",
    width: 1200,
    height: 675,
    title: "market-elt — DuckDB + dbt ELT",
    subTitle: "Reproducible pipeline + data-quality tests",
    alt: "market-elt card: reproducible DuckDB and dbt ELT pipeline with data-quality tests",
    delayAnimation: "300",
    portfolioLink: "https://github.com/Rodrigo-Palma/market-elt",
    cats: ["Data Engineering"],
  },
];

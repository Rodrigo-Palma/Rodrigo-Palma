import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

// Single source of truth for projects. Each project lists the categories
// (tabs) it belongs to; the tabs below are derived from this list.
const projects = [
  {
    img: "/img/portfolio/m-proj-4.jpg",
    width: 400,
    height: 400,
    title: "QuantLens — AI Quant Analyst (B3)",
    subTitle: "Local-first LLM + RAG + evals (Python/FastAPI)",
    alterText: "IA / GenAI",
    portfolioLink: "https://github.com/Rodrigo-Palma/quantlens",
    cats: ["IA / GenAI", "Finanças"],
  },
  {
    img: "/img/portfolio/m-portfolio-6.jpg",
    width: 400,
    height: 500,
    title: "DocLens — Local RAG with Cited Answers",
    subTitle: "Offline RAG over documents (Ollama)",
    alterText: "IA / GenAI",
    portfolioLink: "https://github.com/Rodrigo-Palma/doclens",
    cats: ["IA / GenAI"],
  },
  {
    img: "/img/portfolio/proj-big-data-1.jpg",
    width: 400,
    height: 400,
    title: "market-elt — DuckDB + dbt ELT",
    subTitle: "Reproducible pipeline + data-quality tests",
    alterText: "Engenharia de Dados",
    portfolioLink: "https://github.com/Rodrigo-Palma/market-elt",
    cats: ["Engenharia de Dados"],
  },
  {
    img: "/img/portfolio/m-proj-1.jpg",
    width: 400,
    height: 550,
    title: "Detecção de Fraudes",
    subTitle: "Em Cartões de Crédito",
    alterText: "Ciência de Dados",
    portfolioLink: "https://github.com/Rodrigo-Palma/Proj_Fraudes_Cartao_Credito/",
    cats: ["Ciência de Dados"],
  },
  {
    img: "/img/portfolio/m-portfolio-2.jpg",
    width: 400,
    height: 400,
    title: "Engenharia de Atributos Financeiros 📈",
    subTitle: "Previsões com dados temporais",
    alterText: "Finanças",
    portfolioLink:
      "https://github.com/Rodrigo-Palma/Proj-Engenharia-de-Atributos-Financeiros",
    cats: ["Ciência de Dados", "Finanças"],
  },
  {
    img: "/img/portfolio/m-proj-2.jpg",
    width: 400,
    height: 400,
    title: "Dashboard de Análise de Vendas",
    subTitle: "em Power BI",
    alterText: "Dashboard",
    portfolioLink:
      "https://app.powerbi.com/view?r=eyJrIjoiMzYyMWY2ODktNGMzMi00M2E0LThkNTgtODZjYWRlY2RmOTA0IiwidCI6IjljODBmZWU3LTVlMWQtNDNmNy04YjViLTdkNGI0ZjU4MWEzOCJ9",
    cats: ["Dashboards"],
  },
];

const tabList = [
  "Todos",
  "IA / GenAI",
  "Engenharia de Dados",
  "Ciência de Dados",
  "Dashboards",
];

const tabListContent = tabList.map((tab) => ({
  porftoliItems:
    tab === "Todos" ? projects : projects.filter((p) => p.cats.includes(tab)),
}));

const Portfolio = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div className="portfolio-box-01" key={i}>
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt={val.alterText}
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default Portfolio;

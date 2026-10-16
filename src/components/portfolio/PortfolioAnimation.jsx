import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";
import { projects } from "./projects";

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 2,
  500: 1,
};

const tabList = ["All", "AI / GenAI", "Data Engineering"];

const tabListContent = tabList.map((tab) => ({
  porftoliItems:
    tab === "All" ? projects : projects.filter((p) => p.cats.includes(tab)),
}));

const PortfolioAnimation = () => {
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
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <button
                              type="button"
                              className="gallery-link"
                              aria-label={`Enlarge image: ${val.title}`}
                              onClick={open}
                            >
                              <img
                                src={val.img}
                                alt={val.alt}
                                width={val.width}
                                height={val.height}
                                loading="lazy"
                                ref={ref}
                              />
                            </button>
                          )}
                        </Item>
                        <div className="portfolio-info">
                          <h3>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h3>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          aria-label={`${val.title} on GitHub`}
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

export default PortfolioAnimation;

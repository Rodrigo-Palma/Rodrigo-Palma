import React from "react";

const AwardContnet = [
  {
    img: "dp100",
    width: 134,
    height: 140,
    awardName: "Azure Data Scientist Associate",
    awardFor: "by Microsoft",
    delayAnimation: "0",
  },
  {
    img: "dp600",
    width: 140,
    height: 140,
    awardName: "Fabric Analytics Engineer Associate",
    awardFor: "by Microsoft",
    delayAnimation: "150",
  },
  {
    img: "pl300",
    width: 133,
    height: 140,
    awardName: "Power BI Data Analyst Associate",
    awardFor: "by Microsoft",
    delayAnimation: "300",
  },
  {
    img: "capm",
    width: 140,
    height: 138,
    awardName: "Certified Associate in Project Management",
    awardFor: "by Project Management Institute",
    delayAnimation: "450",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img
                  src={`img/award/${val.img}.webp`}
                  alt=""
                  width={val.width}
                  height={val.height}
                  loading="lazy"
                />
              </div>
              <div className="media-body">
                <h3>{val.awardName}</h3>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;

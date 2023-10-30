import React from "react";

const AwardContnet = [
  {
    img: "dp100",
    awardName: "Azure Data Scientist Associate",
    awardFor: "by Microsoft",
    delayAnimation: "0",
  },
  {
    img: "dp500",
    awardName: "Azure Enterprise Data Analyst Associate",
    awardFor: "by Microsoft",
    delayAnimation: "150",
  },
  {
    img: "pl300",
    awardName: "Power BI Data Analyst Associate",
    awardFor: "by Microsoft",
    delayAnimation: "300",
  },
  {
    img: "capm",
    awardName: "Certified Associate in Project Management",
    awardFor: "by Project Management Institute",
    delayAnimation: "450",
  },
  {
    img: "dscp",
    awardName:"Data Scientist Certified Professional - DSCP",
    awardFor: "by Data Science Academy",
    delayAnimation: "600",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div className="col-lg-4 m-15px-tb" key={i}>
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}.jpeg`} alt="award" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
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

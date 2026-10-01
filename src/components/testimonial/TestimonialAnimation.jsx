import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonilContent = [
  {
    login: "tkem",
    desc: `Thank you! Regarding PRs, I think it doesn't get much better than that!`,
    reviewerName: "Thomas Kemmer",
    designation: "Author of cachetools",
    link: "https://github.com/tkem/cachetools/pull/424#issuecomment-5859424923",
    delayAnimation: "",
  },
  {
    login: "rich-iannone",
    desc: `…thank you for the series of PRs! These are great contributions and I really
    appreciate all of this :)`,
    reviewerName: "Richard Iannone",
    designation: "Maintainer of great-tables (Posit)",
    link: "https://github.com/posit-dev/great-tables/pull/867#issuecomment-5743032749",
    delayAnimation: "",
  },
  {
    login: "Fokko",
    desc: `This caught us more than once! Thanks for fixing this`,
    reviewerName: "Fokko Driesprong",
    designation: "Maintainer of iceberg-python (Apache Iceberg)",
    link: "https://github.com/apache/iceberg-python/pull/4005#pullrequestreview-5309353671",
    delayAnimation: "",
  },
  {
    login: "adamreeve",
    desc: `…this makes sense to me and I like that the implementation doesn't need to
    build a new string like the Java version`,
    reviewerName: "Adam Reeve",
    designation: "Maintainer of delta-rs (Delta Lake)",
    link: "https://github.com/delta-io/delta-rs/pull/4747#pullrequestreview-5262165102",
    delayAnimation: "",
  },
  {
    login: "merelcht",
    desc: `Good find, thanks for the fix`,
    reviewerName: "Merel Theisen",
    designation: "Maintainer of Kedro",
    link: "https://github.com/kedro-org/kedro/pull/5793#pullrequestreview-5366231780",
    delayAnimation: "",
  },
];

function TestimonialCard({ val }) {
  return (
    <div className="testimonial-01 media">
      <div className="avatar">
        {val.login ? (
          <img
            src={`https://github.com/${val.login}.png?size=120`}
            alt={val.reviewerName}
          ></img>
        ) : (
          <div
            aria-hidden="true"
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "#ff9301",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            {val.initials}
          </div>
        )}
      </div>
      <div className="media-body">
        <p>{val.desc}</p>
        <h6>{val.reviewerName}</h6>
        <span>
          {val.link ? (
            <a href={val.link} target="_blank" rel="noopener noreferrer">
              {val.designation}
            </a>
          ) : (
            val.designation
          )}
        </span>
      </div>
    </div>
  );
}

export default function SimpleSlider() {
  // A single testimonial: render the card directly. react-slick clones a lone
  // slide (showing it twice) and mismanages the track width, so skip it here.
  if (TestimonilContent.length === 1) {
    return (
      <div className="testimonial-wrapper">
        <div className="row">
          <div className="col-lg-6 col-md-9">
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={TestimonilContent[0].delayAnimation}
            >
              <TestimonialCard val={TestimonilContent[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <TestimonialCard val={val} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

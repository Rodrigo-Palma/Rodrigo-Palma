import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonilContent = [
  {
    initials: "FD",
    desc: `Every point Rodrigo raised on methodological rigor was always well-placed
    and measured, explaining seemingly unreachable details in accessible terms. The
    unanimous view of the public defenders involved was that we were dealing with
    someone simply outstanding.`,
    reviewerName: "Felipe Drummond",
    designation: "Public Defender — DPE-RS",
    delayAnimation: "",
  },
];

function TestimonialCard({ val }) {
  return (
    <div className="testimonial-01 media">
      <div className="avatar">
        {val.imageName ? (
          <img
            src={`img/testimonial/${val.imageName}.jpg`}
            alt="review comments"
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
        <span>{val.designation}</span>
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

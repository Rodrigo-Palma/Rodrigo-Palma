import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
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

  // Avoid react-slick cloning a single slide to fill the track (which renders
  // the same testimonial twice). Cap visible slides to the number of items.
  const slidesToShow = Math.min(2, TestimonilContent.length);
  const settings = {
    dots: TestimonilContent.length > slidesToShow,
    arrow: false,
    infinite: TestimonilContent.length > slidesToShow,
    speed: 900,
    slidesToShow,
    slidesToScroll: slidesToShow,
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
                      background: "#2563eb",
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
          </div>
        ))}
      </Slider>
    </div>
  );
}


import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

import { Button } from "../";

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => {
  return (
    <div>
      <Button label="" type="secondary" icon="arrow-right" {...props} />
    </div>
  );
};

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => {
  return (
    <div>
      <Button label="" type="secondary" icon="arrow-left" {...props} />
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  initialSlide: 0,

  appendDots: (dots) => (
    <div className="slick-dots">
      <ul>{dots}</ul>
    </div>
  ),

  nextArrow: <SlickArrowRight />,
  prevArrow: <SlickArrowLeft />,
};

const Carousel = ({
  children,
  slidesToShow,
  slidesToScroll,
  toShowMobile,
  toScrollMobile,
}) => (
  <Slider
    {...settings}
    slidesToShow={slidesToShow}
    slidesToScroll={slidesToScroll}
    responsive={[
      {
        breakpoint: 576,
        settings: {
          slidesToShow: toShowMobile,
          slidesToScroll: toScrollMobile,
        },
      },
    ]}
  >
    {children}
  </Slider>
);

Carousel.propTypes = {
  children: PropTypes.node,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  toShowMobile: PropTypes.number,
  toScrollMobile: PropTypes.number,
};

Carousel.defaultProps = {
  children: null,
  slidesToShow: 3,
  slidesToScroll: 3,
  toShowMobile: 1,
  toScrollMobile: 1,
};

export default Carousel;

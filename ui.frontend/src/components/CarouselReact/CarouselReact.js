import Slider from "react-slick";
import PropTypes from "prop-types";
import { Button } from "../";

import styles from "./CarouselReact.module.scss";
import useWindowDimension from "../../hooks/useWindowDimension";

const CarouselReact = ({
  carouselConfigs,
  children,
  customClass,
  onSlide,
  defaultExpanded,
  autoplay,
  delay,
  infinite,
  emptySlots,
  emptySlotsTablet,
}) => {
  const { width } = useWindowDimension();

  const Arrow = ({ className, style, onClick, direction }) => {
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <Button
          type="secondary"
          label=""
          icon={`arrow-${direction}`}
          onClick={() => {
            onSlide && defaultExpanded && onSlide(defaultExpanded);
          }}
        />
      </div>
    );
  };

  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    appendDots: (dots) => (
      <div className={"slick-dots"}>
        <ul>{dots}</ul>
      </div>
    ),
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
  };

  return (
    <Slider
      {...defaultSettings}
      slidesToShow={carouselConfigs[0].slidesToShow}
      slidesToScroll={carouselConfigs[0].slidesToScroll}
      rows={carouselConfigs[0].rows}
      autoplay={autoplay}
      autoplaySpeed={delay}
      className={`${styles.carousel} ${styles[customClass]}`}
      responsive={carouselConfigs}
    >
      {children}
      {Array.from(
        Array(width > 992 || width < 768 ? emptySlots : emptySlotsTablet)
      ).map((_, index) => (
        <div key={index}></div>
      ))}
    </Slider>
  );
};

CarouselReact.propTypes = {
  children: PropTypes.node,
  autoplay: PropTypes.bool,
  delay: PropTypes.number,
  infinite: PropTypes.bool,
};

CarouselReact.defaultProps = {
  children: null,
  infinite: false,
};

export default CarouselReact;

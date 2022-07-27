export const carouselConfigs = () => {
  return [
    {
      slidesToShow: 3,
      slidesToScroll: 3,
      rows: 1,
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        variableWidth: true,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        variableWidth: true,
      },
    },
  ];
};

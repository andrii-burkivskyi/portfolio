import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { pure } from 'utils/hoc';

import MainSliderItem from '../Item';

import styles from './movies__main_slider.scss';

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  accessibility: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  fade: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        fade: false
      }
    }
  ]
};

const MainSlider = ({ movies }) => (
  <div className={styles.container}>
    <Slider {...sliderSettings}>
      {
        movies.map((movie) => (
          <div key={movie.id}>
            <MainSliderItem
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              backdrop={movie.backdrop_path}
            />
          </div>
        ))
      }
    </Slider>
  </div>
);

MainSlider.propTypes = {
  movies: PropTypes.array
};

export default pure(['movies'])(MainSlider);

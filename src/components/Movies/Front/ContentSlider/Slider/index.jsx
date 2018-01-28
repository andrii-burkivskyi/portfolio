import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { compose, methods, pure } from 'utils/hoc';

import SliderHeader from '../Header';
import SliderItem from '../Item';

import styles from './movies__content_slider.scss';

const sliderSettings = {
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }
  ]
};

const ContentSlider = ({ movies, title, path, prev, next, init }) => (
  <div className={styles.container}>
    <SliderHeader
      title={title}
      path={path}
      next={next}
      prev={prev}
    />

    <Slider
      ref={(slider) => init(slider)}
      {...sliderSettings}
    >
      {
        movies.map((movie) => (
          <div key={movie.id}>
            <SliderItem
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              popularity={movie.vote_average}
              genres={movie.genres}
            />
          </div>
        ))
      }
    </Slider>
  </div>
);

ContentSlider.propTypes = {
  movies: PropTypes.array,
  title: PropTypes.string,
  path: PropTypes.string
};

export default compose(
  methods({
    init(slider) {
      this.slider = slider;
    },
    next() { this.slider.slickNext(); },
    prev() { this.slider.slickPrev(); }
  }),
  pure(['movies', 'title', 'path'])
)(ContentSlider);

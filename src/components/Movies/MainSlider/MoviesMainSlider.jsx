import React, { Component } from 'react';
import Slider from 'react-slick';

import MoviesMainSliderItem from './MoviesMainSliderItem.jsx';

import styles from './MoviesMainSlider.scss';

export default class MoviesMainSlider extends Component {
  render() {
    const { movies } = this.props;
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      accessibility: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
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

    return (
      <div className={styles.container}>
        <Slider {...settings}>
          {
            movies.map((movie) => (
              <div key={movie.get('id')}>
                <MoviesMainSliderItem
                  id={movie.get('id')}
                  title={movie.get('title')}
                  overview={movie.get('overview')}
                  backdrop={movie.get('backdrop_path')}
                />
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Slider from 'react-slick';

import MoviesContentSliderHeader from './MoviesContentSliderHeader.jsx';
import MoviesContentSliderItem from './MoviesContentSliderItem.jsx';

import styles from './MoviesContentSlider.scss';

export default class MoviesContentSlider extends Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  prev() {
    this.slider.slickPrev();
  }

  render() {
    const { movies, title, path } = this.props;
    const settings = {
      arrows: false,
      infinite: true,
      accessibility: true,
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

    return (
      <div className={styles.container}>
        <MoviesContentSliderHeader
          title={title}
          path={path}
          next={this.next}
          prev={this.prev}
        />

        <Slider
          ref={(slider) => this.slider = slider} // eslint-disable-line
          {...settings}
        >
          {
            movies.map((movie) => (
              <div key={movie.get('id')}>
                <MoviesContentSliderItem
                  id={movie.get('id')}
                  title={movie.get('title')}
                  poster={movie.get('poster_path')}
                  popularity={movie.get('vote_average')}
                  genres={movie.get('genre_ids')}
                />
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}

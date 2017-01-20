import React, { Component } from 'react';

import MoviesCategoryItem from './MoviesCategoryItem.jsx';

import styles from './MoviesCategoryBody.scss';

export default class MoviesCategoryBody extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div className={styles.container}>
        {
          movies.map((movie) =>
            <MoviesCategoryItem
              key={movie.get('id')}
              id={movie.get('id')}
              title={movie.get('title')}
              poster={movie.get('poster_path')}
              genres={movie.get('genre_ids')}
              popularity={movie.get('vote_average')}
            />
          )
        }
      </div>
    );
  }
}

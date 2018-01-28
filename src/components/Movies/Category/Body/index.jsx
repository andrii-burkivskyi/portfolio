import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

import styles from './movies_category__body.scss';

const Body = ({ movies }) => (
  <div className={styles.container}>
    {
      movies.map((movie) => (
        <Item
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          genres={movie.genres}
          popularity={movie.vote_average}
        />
      ))
    }
  </div>
);

Body.propTypes = {
  movies: PropTypes.array
};

export default Body;

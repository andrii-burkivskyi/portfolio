import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router';

import { compose, methods } from 'utils/hoc';

import Image from 'components/Image/Image.jsx';
import Icon from 'components/Icon';

import styles from './movies__main_slider_item.scss';

const SliderItem = ({ id, title, overview, backdrop, onClick }) => (
  <div className={styles.container} onClick={onClick}>
    <Image
      className={styles.image}
      src={`https://image.tmdb.org/t/p/original${backdrop}`}
      alt={title}
      width={984}
      height={553.5}
      scale={3}
    />
    <div className={styles.info_box}>
      <h3 className={styles.title}>{title}</h3>
      <hr className={styles.delimiter} />
      <span className={styles.overview}>{overview}</span>
      <Link to={`/movies/single/${id}`} className={styles.link}>
        Read more
        <Icon className={styles.icon} glyph="#arrow" />
      </Link>
    </div>
  </div>
);

SliderItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  backdrop: PropTypes.string,
  onClick: PropTypes.func
};

export default compose(
  withRouter,
  methods({
    onClick() {
      const { router, id } = this.props;

      router.push({ pathname: `/movies/single/${id}` });
    }
  })
)(SliderItem);

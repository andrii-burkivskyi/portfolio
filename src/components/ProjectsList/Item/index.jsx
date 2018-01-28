import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './projects_list__item.scss';

const Item = ({ image, technologies, title, url }) => (
  <div className={styles.container}>
    <div className={styles.left_block}>
      <img className={styles.image} src={image} alt={title} />
    </div>

    <div className={styles.right_block}>
      <h1 className={styles.title}>{title}</h1>

      <ul className={styles.technologies}>
        {
          technologies.map((technology) => (
            <li key={technology} className={styles.technology}>
              {technology}
            </li>
          ))
        }
      </ul>

      <Link className={styles.link} to={url}>Read more</Link>
    </div>
  </div>
);

Item.propTypes = {
  image: PropTypes.string,
  technologies: PropTypes.array,
  title: PropTypes.string,
  url: PropTypes.string
};

export default Item;

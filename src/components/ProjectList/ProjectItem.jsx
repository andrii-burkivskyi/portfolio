import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './ProjectItem.scss';

export default class ProjectItem extends Component {
  render() {
    const {
      image,
      description,
      technologies,
      title,
      url
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.left_block}>
          <img className={styles.image} src={image} alt={title} />
        </div>

        <div className={styles.right_block}>
          <h1 className={styles.title}>{title}</h1>

          <span className={styles.description}>{description}</span>

          <ul className={styles.technologies}>
            {
              technologies.map((technology) =>
                <li key={technology} className={styles.technology}>
                  {technology}
                </li>
              )
            }
          </ul>

          <Link className={styles.link} to={url}>Read more</Link>
        </div>
      </div>
    );
  }
}

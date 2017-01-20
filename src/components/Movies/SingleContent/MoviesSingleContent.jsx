import React, { Component } from 'react';

import CastItem from 'components/Movies/SingleContent/CastItem.jsx';

import styles from './MoviesSingleContent.scss';

export default class MoviesSingleContent extends Component {
  constructor(props) {
    super(props);

    this.getCast = this.getCast.bind(this);
  }

  getCast() {
    const { cast } = this.props;

    return cast ? cast.slice(0, 10) : [];
  }

  render() {
    const { title, overview } = this.props;
    const cast = this.getCast();

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>
          {title}
        </h2>

        <div className={styles.overview}>
          {overview}
        </div>
        {
          cast.size > 0 &&
          <h3 className={styles.cast_title}>
            Actors:
          </h3>
        }
        <div className={styles.cast_list}>
          {
            cast.map((castItem) =>
              <CastItem
                key={castItem.get('credit_id')}
                profile={castItem.get('profile_path')}
                name={castItem.get('name')}
                character={castItem.get('character')}
              />
            )
          }
        </div>
      </div>
    );
  }
}

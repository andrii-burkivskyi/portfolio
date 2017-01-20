import React, { Component } from 'react';
import moment from 'moment';

import Image from 'components/Image/Image.jsx';
import InfoItem from 'components/Movies/SingleSidebar/InfoItem.jsx';

import styles from './MoviesSingleSidebar.scss';

export default class MoviesSingleSidebar extends Component {
  constructor(props) {
    super(props);

    this.getPosterUrl = this.getPosterUrl.bind(this);
    this.getReleaseDateString = this.getReleaseDateString.bind(this);
    this.getGenresString = this.getGenresString.bind(this);
    this.getRatingString = this.getRatingString.bind(this);
  }

  getPosterUrl() {
    const { poster } = this.props;

    return poster && `https://image.tmdb.org/t/p/w300${poster}`;
  }

  getGenresString() {
    const { genres } = this.props;

    return {
      text: genres && genres.join(', '),
      shouldDisplayed: genres && genres.size > 0
    };
  }

  getRatingString() {
    const { voteAverage, voteCount } = this.props;

    return {
      text: `${voteAverage} from ${voteCount} users`,
      shouldDisplayed: voteAverage > 0
    };
  }

  getBudgetString() {
    const { budget } = this.props;

    return {
      text: `${budget} $`,
      shouldDisplayed: budget > 0
    };
  }

  getReleaseDateString() {
    const { releaseDate } = this.props;
    const date = moment(releaseDate);

    return {
      text: date.format('D MMM YYYY'),
      shouldDisplayed: date.isValid()
    };
  }

  getRuntimeString() {
    const { runtime } = this.props;

    return {
      text: `${runtime} minutes`,
      shouldDisplayed: runtime > 0
    };
  }

  render() {
    const { title, status } = this.props;
    const posterUrl = this.getPosterUrl();
    const releaseDate = this.getReleaseDateString();
    const genres = this.getGenresString();
    const rating = this.getRatingString();
    const budget = this.getBudgetString();
    const runtime = this.getRuntimeString();


    return (
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={posterUrl}
          alt={title}
          width={204}
          height={306}
          scale={2.5}
        />

        <InfoItem
          label={'Genres:'}
          text={genres.text}
          shouldDisplayed={genres.shouldDisplayed}
        />

        <InfoItem
          label={'Rating:'}
          text={rating.text}
          shouldDisplayed={rating.shouldDisplayed}
        />

        <InfoItem
          label={'Release date:'}
          text={releaseDate.text}
          shouldDisplayed={releaseDate.shouldDisplayed}
        />

        <InfoItem
          label={'Budget:'}
          text={budget.text}
          shouldDisplayed={budget.shouldDisplayed}
        />

        <InfoItem
          label={'Status:'}
          text={status}
          shouldDisplayed
        />

        <InfoItem
          label={'Runtime:'}
          text={runtime.text}
          shouldDisplayed={runtime.shouldDisplayed}
        />
      </div>
    );
  }
}

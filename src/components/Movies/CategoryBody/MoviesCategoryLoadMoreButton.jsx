import React, { Component } from 'react';

import styles from './MoviesCategoryLoadMoreButton.scss';

export default class MoviesCategoryLoadMoreButton extends Component {
  constructor(props) {
    super(props);

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    const { category, page, loadMore } = this.props;

    loadMore(category, page + 1);
  }

  render() {
    const { page, pagesQty } = this.props;

    if (page >= pagesQty) { return null; }

    return (
      <button
        className={styles.container}
        onClick={this.loadMore}
      >
        Load more
      </button>
    );
  }
}

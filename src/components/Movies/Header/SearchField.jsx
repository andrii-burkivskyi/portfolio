import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Icon from 'components/Icon/Icon.jsx';

import styles from './SearchField.scss';

@withRouter
export default class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  onSubmit(event) {
    const { location, router } = this.props;
    const { query } = this.state;

    event.preventDefault();

    router.push({
      pathname: '/movies/search',
      query: {
        ...location.query,
        search: query
      }
    });

    this.setState({
      query: ''
    });

    this.search.blur();
  }

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.onSubmit} className={styles.container}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search"
          value={query}
          onChange={this.onChange}
          ref={(search) => this.search = search} // eslint-disable-line
        />
        <Icon className={styles.icon} glyph="#search" />
      </form>
    );
  }
}

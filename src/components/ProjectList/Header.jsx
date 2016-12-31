import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchHeader } from 'actions/projects.actions.js';

import styles from './Header.scss';

function mapStateToProps(state) {
  return {
    title: state.getIn(['smallData', 'projectListHeader', 'data', 'title']),
    description: state.getIn(['smallData', 'projectListHeader', 'data', 'description']),
    image: state.getIn(['smallData', 'projectListHeader', 'data', 'image'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadHeader: () => dispatch(fetchHeader())
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Header extends Component {
  componentWillMount() {
    const { loadHeader } = this.props;

    loadHeader();
  }

  render() {
    const { title, description, image } = this.props;

    return (
      <div className={styles.container} style={{ backgroundImage: `url(${image})` }}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.description}>
          {description}
        </span>
      </div>
    );
  }
}

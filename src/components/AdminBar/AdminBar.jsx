import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';

import styles from './AdminBar.scss';

function mapStateToProps(state) {
  return {
    isOpen: state.getIn(['modals', 'adminBar', 'isOpen'])
  };
}

@connect(mapStateToProps)
export default class AdminBar extends Component {
  render() {
    const { isOpen } = this.props;

    const container = classNames(
      (isOpen && 'menu_open'),
      styles.container
    );

    return (
      <div className={container}>
        <Logo />

        <Navigation />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleModal } from 'actions/modals.actions.js';

import AdminLink from './AdminLink.jsx';

import styles from './Navigation.scss';

function mapDispatchToProps(dispatch) {
  return {
    onToggleMailPopup: () => dispatch(toggleModal('mailPopup'))
  };
}

@connect(null, mapDispatchToProps)
export default class Navigation extends Component {
  render() {
    const { onToggleMailPopup } = this.props;

    return (
      <div className={styles.container}>
        <AdminLink icon={'#projects-list'} to="/projects">Project list</AdminLink>
        <AdminLink icon={'#github'} href={'https://github.com/andrii-burkivskyi/andrii-burkivskyi.github.io'}>Source</AdminLink>
        <AdminLink icon={'#mail'} onClick={onToggleMailPopup}>Contact me</AdminLink>
      </div>
    );
  }
}

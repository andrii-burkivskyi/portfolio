import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleModal } from 'actions/modals.actions.js';

import Icon from 'components/Icon/Icon.jsx';

import styles from './MailPopupHeader.scss';

function mapDispatchToProps(dispatch) {
  return {
    onMailPopupToggle: () => dispatch(toggleModal('mailPopup'))
  };
}

@connect(null, mapDispatchToProps)
export default class MailPopupHeader extends Component {
  render() {
    const { onMailPopupToggle } = this.props;

    return (
      <header className={styles.container}>
        <span className={styles.title}>Contact letter:</span>

        <button className={styles.button} onClick={onMailPopupToggle}>
          <Icon className={styles.icon} glyph="#close-button" />
        </button>
      </header>
    );
  }
}

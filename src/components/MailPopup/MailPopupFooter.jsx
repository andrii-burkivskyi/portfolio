import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import Icon from 'components/Icon/Icon.jsx';

import { isFormValid } from 'selectors/form.selector.js';

import styles from './MailPopupFooter.scss';

function mapStateToProps(state) {
  return {
    isMailFormValid: isFormValid(state)
  };
}

@connect(mapStateToProps)
export default class MailPopupFooter extends Component {
  render() {
    const { isMailFormValid } = this.props;
    const button = classNames(
      styles.button_send,
      (!isMailFormValid && styles.disable)
    );

    return (
      <footer className={styles.footer}>
        <button type="submit" className={button} >
          <span className={styles.text_send}>Send letter</span>
          <Icon className={styles.icon_send} glyph="#sent-mail" />
        </button>
      </footer>
    );
  }
}

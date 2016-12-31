import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './MailPopupInfo.scss';

function mapStateToProps(state) {
  return {
    isSending: state.getIn(['form', 'isFetching']),
    error: state.getIn(['form', 'error']),
    touched: state.getIn(['form', 'touched'])
  };
}

@connect(mapStateToProps)
export default class MailPopupInfo extends Component {
  render() {
    const { isSending, error, touched } = this.props;

    if (!touched) { return null; }

    return (
      <div className={styles.container}>
        {
          isSending &&
            <span className={styles.message}>
              Sending...
            </span>
        }

        {
          !isSending && !error &&
            <span className={styles.message}>
              The letter was sent.
            </span>
        }

        {
          !isSending && error &&
            <span className={styles.message}>
              Sorry an error occurred, please try again later.
            </span>
        }
      </div>
    );
  }
}

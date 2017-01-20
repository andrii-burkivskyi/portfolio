import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { toggleModal } from 'actions/modals.actions.js';

import styles from './MenuButton.scss';

function mapStateToProps(state) {
  return {
    isOpen: state.getIn(['modals', 'adminBar', 'isOpen'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdminBarToggle: () => dispatch(toggleModal('adminBar'))
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class MenuButton extends Component {
  render() {
    const { isOpen, onAdminBarToggle } = this.props;
    const container = classNames(
      (isOpen && styles.open),
      styles.container
    );

    return (
      <button className={container} onClick={onAdminBarToggle}>
        <span />
        <span />
        <span />
      </button>
    );
  }

}

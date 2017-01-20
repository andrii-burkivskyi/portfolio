import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { closeModal } from 'actions/modals.actions.js';

import Icon from 'components/Icon/Icon.jsx';

import styles from './AdminLink.scss';

function mapDispatchToProps(dispatch) {
  return {
    onAdminBarClose: () => dispatch(closeModal('adminBar'))
  };
}

@connect(null, mapDispatchToProps)
export default class AdminLink extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onClick, onAdminBarClose } = this.props;

    if (onClick) {
      onClick();
    }

    onAdminBarClose();
  }

  render() {
    const { icon, to, href, children, style } = this.props;

    return (
      <Link
        className={styles.container}
        to={to}
        href={href}
        onClick={this.onClick}
      >
        <Icon className={styles.icon} glyph={icon} style={style} />
        <span className={styles.text}>{children}</span>
      </Link>
    );
  }

}

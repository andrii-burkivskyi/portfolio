import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editToggle, settingsToggle } from 'actions/adminBar.actions.js';

import AdminButton from './AdminButton.jsx';

import styles from './Options.scss';

function mapStateToProps(state) {
  return {
    isEdit: state.getIn(['adminBar', 'isEdit']),
    isEditable: state.getIn(['adminBar', 'isEditable']),
    isSettings: state.getIn(['adminBar', 'isSettings']),
    isCustomizable: state.getIn(['adminBar', 'isCustomizable'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onEditToggle: () => dispatch(editToggle()),
    onSettingsToggle: () => dispatch(settingsToggle())
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Options extends Component {
  render() {
    const {
      isEdit,
      isEditable,
      isSettings,
      isCustomizable,
      onEditToggle,
      onSettingsToggle
    } = this.props;

    return (
      <div className={styles.container}>
        <AdminButton
          icon={'#edit'}
          isActive={isEdit}
          isDisable={!isEditable}
          onClick={onEditToggle}
        >
          Edit
        </AdminButton>

        <AdminButton
          icon={'#settings'}
          isActive={isSettings}
          isDisable={!isCustomizable}
          onClick={onSettingsToggle}
        >
          Settings
        </AdminButton>
      </div>
    );
  }
}

import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { MenuItem, MenuButton } from 'components/AdminBar';

import { getModalOpenStatus } from 'core/modals/selectors';
import modalsActions from 'core/modals/actions';

import styles from './admin_bar.scss';

const logoStyle = { width: '20px' };

const containerClass = ({ isMenuOpen }) => classNames(
  styles.container,
  isMenuOpen && styles.is_open
);

const mapStateToProps = (state) => ({
  isMenuOpen: getModalOpenStatus(state, 'adminBar')
});

const mapDispatchToProps = (dispatch) => ({
  closeMenu: () => dispatch(modalsActions.closeModal({ modalName: 'adminBar' })),
  toggleMenu: () => dispatch(modalsActions.toggleModal({ modalName: 'adminBar' })),
  toggleMeilPopup: () => {
    dispatch(modalsActions.toggleModal({ modalName: 'mailPopup' }));
    dispatch(modalsActions.closeModal({ modalName: 'adminBar' }));
  }
});

const AdminBar = ({ isMenuOpen, closeMenu, toggleMenu, toggleMeilPopup }) => (
  <div className={containerClass({ isMenuOpen })}>
    <div className={styles.logo}>
      <MenuItem
        icon="#logo"
        iconStyle={logoStyle}
        to="/"
        onClick={closeMenu}
      >
        Andrii Burkivskyi
      </MenuItem>

      <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
    </div>

    <div className={styles.navigation}>
      <MenuItem
        icon="#projects-list"
        to="/projects"
        onClick={closeMenu}
      >
        Project list
      </MenuItem>

      <MenuItem
        icon="#github"
        href="https://github.com/andrii-burkivskyi/portfolio"
        onClick={closeMenu}
      >
        Source
      </MenuItem>

      <MenuItem
        icon="#mail"
        onClick={toggleMeilPopup}
      >
        Contact me
      </MenuItem>
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(AdminBar);

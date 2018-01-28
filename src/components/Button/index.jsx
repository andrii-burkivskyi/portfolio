import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'components/Icon';

import styles from './button.scss';

const buttonClass = ({ theme, isDisable, glyph, iconPosition }) => classNames(
  styles.container,
  styles[theme],
  glyph && styles[`icon_${iconPosition}`],
  isDisable && styles.disable
);

const Button = ({ text, glyph, iconPosition, theme, style, isDisable, onClick }) => (
  <button
    className={buttonClass({ theme, isDisable, glyph, iconPosition })}
    onClick={onClick}
    style={style}
  >
    {
      text &&
        <span className={styles.text}>{text}</span>
    }
    {
      glyph &&
        <Icon className={styles.icon} glyph={glyph} />
    }
  </button>
);

Button.defaultProps = {
  iconPosition: 'left'
};

Button.propTypes = {
  text: PropTypes.string,
  glyph: PropTypes.string,
  iconPosition: PropTypes.string,
  theme: PropTypes.string,
  isDisable: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;

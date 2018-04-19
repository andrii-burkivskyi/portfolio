import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'components/Icon';
import bem from 'utils/bem';

import styles from './button.scss';

const Button = ({ text, glyph, iconPosition, theme, style, isDisable, onClick }) => (
  <button
    className={bem(
      styles.container,
      { theme, isDisable, iconPosition: glyph && iconPosition }
    )}
    onClick={onClick}
    style={style}
  >
    {
      text &&
        <span
          className={bem(
            styles.text,
            { theme, iconPosition: glyph && iconPosition }
          )}
        >
          {text}
        </span>
    }
    {
      glyph &&
        <Icon
          className={bem(
            styles.icon,
            { theme, iconPosition: glyph && iconPosition }
          )}
          glyph={glyph}
        />
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

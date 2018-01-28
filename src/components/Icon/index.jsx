import React from 'react';
import PropTypes from 'prop-types';

const files = require.context('svg-sprite-loader!assets/icons', false, /.*\.svg$/);
files.keys().map(files);

const Icon = ({ className, width, height, glyph, style }) => (
  <svg className={className} width={width} height={height} style={style}>
    <use xlinkHref={glyph} />
  </svg>
);

Icon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  glyph: PropTypes.string,
  style: PropTypes.object
};

export default Icon;

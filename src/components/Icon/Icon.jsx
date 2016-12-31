import React, { Component } from 'react';

const files = require.context('svg-sprite!assets/icons', false, /.*\.svg$/);
files.keys().map(files);

export default class Icon extends Component {
  render() {
    const { className, width, height, glyph, style } = this.props;

    return (
      <svg className={className} width={width} height={height} style={style}>
        <use xlinkHref={glyph} />
      </svg>
    );
  }
}

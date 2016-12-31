import React, { Component } from 'react';

import LinkItem from './LinkItem.jsx';
import ChartItem from './ChartItem.jsx';
import TimeItem from './TimeItem.jsx';

export default class ItemFactory extends Component {
  render() {
    const { item, black } = this.props;

    switch (item.get('type')) {
      case 'link': {
        return (
          <LinkItem
            icon={item.get('icon')}
            text={item.get('text')}
            url={item.get('url')}
          />
        );
      }

      case 'chart': {
        return (
          <ChartItem
            value={item.get('value')}
            text={item.get('text')}
            black={black}
          />
        );
      }

      case 'time': {
        return (
          <TimeItem
            position={item.get('position')}
            time={item.get('time')}
            organisation={item.get('organisation')}
            description={item.get('description')}
          />
        );
      }

      default: {
        return null;
      }
    }
  }
}

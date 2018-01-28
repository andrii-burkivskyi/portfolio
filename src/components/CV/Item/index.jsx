import React from 'react';
import PropTypes from 'prop-types';

import { pure } from 'utils/hoc';

import LinkItem from './LinkItem';
import ChartItem from './ChartItem';
import TimeItem from './TimeItem';

const ItemFactory = ({ item, color }) => {
  if (item.type === 'link') {
    return (
      <LinkItem
        icon={item.icon}
        text={item.text}
        url={item.url}
      />
    );
  } else if (item.type === 'chart') {
    return (
      <ChartItem
        value={item.value}
        text={item.text}
        color={color}
      />
    );
  } else if (item.type === 'time') {
    return (
      <TimeItem
        position={item.position}
        time={item.time}
        organisation={item.organisation}
        description={item.description}
      />
    );
  }

  return null;
};

ItemFactory.propTypes = {
  item: PropTypes.object,
  color: PropTypes.string
};

export default pure(['item'])(ItemFactory);

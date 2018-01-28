import React from 'react';
import PropTypes from 'prop-types';

import { pure } from 'utils/hoc';

import PersonInfo from './PersonInfo';
import ListBlock from './ListBlock';

const BlockFactory = ({ block, color }) => {
  if (block.type === 'person_info') {
    return (
      <PersonInfo
        avatar={block.avatar}
        name={block.name}
        sername={block.sername}
        position={block.position}
      />
    );
  } else if (block.type === 'list') {
    return (
      <ListBlock
        icon={block.icon}
        title={block.title}
        items={block.items}
        color={color}
      />
    );
  }

  return null;
};

BlockFactory.propTypes = {
  block: PropTypes.object,
  color: PropTypes.string
};

export default pure(['block'])(BlockFactory);

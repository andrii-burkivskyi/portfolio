import React, { Component } from 'react';

import PersonInfo from './PersonInfo.jsx';
import ListBlock from './ListBlock.jsx';

export default class BlockFactory extends Component {
  render() {
    const { block, black } = this.props;

    switch (block.get('type')) {
      case 'person_info': {
        return (
          <PersonInfo
            avatar={block.get('avatar')}
            name={block.get('name')}
            sername={block.get('sername')}
            position={block.get('position')}
          />
        );
      }

      case 'list': {
        return (
          <ListBlock
            icon={block.get('icon')}
            title={block.get('title')}
            items={block.get('items')}
            black={black}
          />
        );
      }

      default: {
        return null;
      }
    }
  }
}

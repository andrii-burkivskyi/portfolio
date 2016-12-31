import React, { Component } from 'react';

import ItemFactory from 'components/CV/Item/ItemFactory.jsx';
import ListTitle from './ListTitle.jsx';
import styles from './ListBlock.scss';

export default class ListBlock extends Component {
  render() {
    const { icon, title, items, black } = this.props;

    return (
      <div className={styles.container}>
        <ListTitle
          icon={icon}
          title={title}
          black={black}
        />
        <div>
          {
            items.map((item) =>
              <ItemFactory
                key={item}
                item={item}
                black={black}
              />
            )
          }
        </div>
      </div>
    );
  }
}

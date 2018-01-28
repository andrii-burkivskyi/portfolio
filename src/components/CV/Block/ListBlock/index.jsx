import React from 'react';
import PropTypes from 'prop-types';

import ItemFactory from 'components/CV/Item';
import ListTitle from 'components/CV/Block/ListTitle';
import styles from './cv__list_block.scss';

const ListBlock = ({ icon, title, items, color }) => (
  <div className={styles.container}>
    <ListTitle
      icon={icon}
      title={title}
      color={color}
    />
    <div>
      {
        items.map((item) => (
          <ItemFactory
            key={item.slug}
            item={item}
            color={color}
          />
        ))
      }
    </div>
  </div>
);

ListBlock.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  items: PropTypes.array
};

export default ListBlock;

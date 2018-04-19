import { createFactory, Component } from 'react';
import shallowEqual from 'fbjs/lib/shallowEqual'; // eslint-disable-line
import pick from 'lodash.pick';

const pure = (propsForUpdate) => (BaseComponent) => {
  const factory = createFactory(BaseComponent);

  if (propsForUpdate && !Array.isArray(propsForUpdate)) {
    throw new Error('Expected [ propsForUpdate ] to be an array.');
  }

  class Pure extends Component {
    shouldComponentUpdate(nextProps) {
      return propsForUpdate
        ? !shallowEqual(pick(this.props, propsForUpdate), pick(nextProps, propsForUpdate))
        : !shallowEqual(this.props, nextProps);
    }

    render() {
      return factory({ ...this.props });
    }
  }

  return Pure;
};

export default pure;

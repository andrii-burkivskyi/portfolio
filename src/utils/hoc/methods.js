import { createFactory, Component } from 'react';

const methods = (handlers) => (BaseComponent) => {
  const factory = createFactory(BaseComponent);

  class Methods extends Component {
    constructor(props) {
      super(props);

      this.handlers = Object.keys(handlers).reduce((acc, key) => ({
        ...acc,
        [key]: handlers[key].bind(this)
      }), {});
    }

    render() {
      return factory({ ...this.props, ...this.handlers });
    }
  }

  return Methods;
};

export default methods;

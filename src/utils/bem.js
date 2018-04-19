import snakeCase from 'lodash.snakecase';

const bem = (elementClass, options) =>
  Object.entries(options).reduce((acc, [key, value]) => {
    const modificator = typeof value !== 'boolean'
      ? `${snakeCase(key)}-${value}`
      : snakeCase(key);

    return value
      ? `${acc} ${elementClass}--${modificator}`
      : acc;
  }, elementClass);

export default bem;

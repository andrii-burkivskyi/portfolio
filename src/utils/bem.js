import snakeCase from 'lodash.snakecase';

const bem = (elementClass, options) =>
  Object.entries(options).reduce((acc, [key, value]) => {
    const modificator = typeof value !== 'boolean'
      ? `${snakeCase(key)}_${value}`
      : snakeCase(key);

    return acc
      ? `${acc} ${elementClass}--${modificator}`
      : `${elementClass}--${modificator}`;
  }, '');

export default bem;

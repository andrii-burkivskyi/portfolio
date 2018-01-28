const compose = (...funcs) => {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((acc, func) => (...args) => acc(func(...args)));
};

export default compose;

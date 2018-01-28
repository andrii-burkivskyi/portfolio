export const blurAll = () => {
  Array.from(document.getElementsByTagName('input')).forEach((item) => item.blur());
  Array.from(document.getElementsByTagName('textarea')).forEach((item) => item.blur());
};

export const scrollTo = (x = 0) => {
  window.scrollTo(x, 0);
};


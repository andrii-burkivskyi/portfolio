export function categoryNormalize(str) { // eslint-disable-line
  const words = str.split(/_/g);
  const sentence = words.join(' ');
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

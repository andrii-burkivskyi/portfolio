export default function serialize(obj) {
  const str = [];
  Object.keys(obj).map((key) => {
    const isKeyInOwnProperty = Object.prototype.hasOwnProperty.call(obj, key);
    if (isKeyInOwnProperty) {
      str.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
    }
    return true;
  });

  return str.join('&');
}

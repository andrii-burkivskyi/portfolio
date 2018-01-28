export function isRequired(value) {
  return !value;
}

export function isEmail(value) {
  return !value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
}

export function validate(value, arr = []) {
  const result = arr.find(([validator]) => validator(value));
  return result ? result[1] : '';
}

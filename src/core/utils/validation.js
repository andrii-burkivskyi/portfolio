export function isRequired(value) {
  if (value) { return ''; }

  return 'This field is required';
}

export function isEmail(value) {
  if (value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) { return ''; }

  return 'Email should be valid.';
}

export function validate(value, arr) {
  const firstValidator = arr.find((validator) => validator(value));
  return firstValidator ? firstValidator(value) : '';
}

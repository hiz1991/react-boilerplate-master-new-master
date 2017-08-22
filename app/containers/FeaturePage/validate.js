export default function(values) {
  const errors = {};
  const requiredFields = [
    'phoneNumber'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.phoneNumber &&
    !/^\d+$/i.test(values.phoneNumber)
  ) {
    errors.phoneNumber = 'Invalid phone number';
  }
  return errors;
}

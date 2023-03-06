import Validator from 'validatorjs';

export const validateData = (data: any, rules: any) => {
  const validator = new Validator(data, rules);
  return {
    valid: !!validator.passes(),
    errors: validator.errors.all(),
  };
};

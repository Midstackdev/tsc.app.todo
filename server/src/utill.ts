import Validator from 'validatorjs';
// import { TaskService } from './service/task.service';

export const validateData = (data: any, rules: any) => {
  const validator = new Validator(data, rules);
  return {
    valid: !!validator.passes(),
    errors: validator.errors.all(),
  };
};

// const EXCLUDED_CHARACTERS: string[] =
//   '~!@#$%^&*()_-+=|\\{}[];:\'"<,.>/?`'.split('');
// Validator.register(
//   'invalidCharacters',
//   (value) => {
//     return !(
//       EXCLUDED_CHARACTERS.filter((i) => String(value).includes(i)).length > 0
//     );
//   },
//   'The :attribute has an invalid character present.',
// );

// Validator.registerAsync(
//   'exists',
//   (username, attribute, req, passes) => {
//     let found;
//     console.log('----use---', username);
//     try {
//       found = TaskService.find(username as string);
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//     // do your database/api checks here etc
//     // then call the `passes` method where appropriate:
//     if (!found) {
//       passes(false, 'Id has already been taken.'); // if username is not available
//     }
//     passes(); // if username is available
//   },
//   'The :attribute does not exists',
// );

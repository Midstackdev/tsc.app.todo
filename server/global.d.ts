import { ValidationErrors } from 'validatorjs';

export {};

declare global {
  interface ValidationResult {
    valid: boolean;
    errors: ValidationErrors;
  }
}

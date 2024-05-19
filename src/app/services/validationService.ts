import {Injectable} from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

/**
 * ValidationService is a service that provides methods for form validation.
 * @class
 */
@Injectable({
  providedIn: 'root',
})
export class ValidationService {

  constructor() {
  }

  /**
   * Returns an array of error messages for a given form control.
   * @param {AbstractControl} control - The form control to validate.
   * @param {string} label - The label of the form control.
   * @param {string} type - The type of the form control.
   * @returns {string[]} An array of error messages.
   */
  getErrorMessage(control: AbstractControl, label: string, type: string): string[] {
    if (!control.errors) {
      return [];
    }

    const errorMessages: {[key: string]: (error: ValidationErrors) => string} = {
      'required': () => `${label} é obrigatório.`,
      'minlength': (error: ValidationErrors) => `${label} deve ter pelo menos ${(error['requiredLength'] ?? 0)} caracteres.`,
      'maxlength': (error: ValidationErrors) => `${label} não pode ter mais de ${(error['requiredLength'] ?? 0)} caracteres.`,
      'min': (error: ValidationErrors) => `${label} deve ser maior ou igual a ${this.formatValue(error['min']?.min, type)}`,
      'max': (error: ValidationErrors) => `${label} deve ser menor ou igual a ${this.formatValue(error['max']?.max, type)}`,
      'cpf': () => 'CPF inválido.',
    };

    return Object.keys(control.errors)
      .filter(key => key in errorMessages && control.errors![key])
      .map(key => errorMessages[key](control.errors![key]));
  }

  getErrorMessageTextArea(control: AbstractControl, label: string): string[] {
    if (!control.errors) {
      return [];
    }

    const errorMessages: {[key: string]: (error: ValidationErrors) => string} = {
      'required': () => {
        if (label) {
          return `${label} é obrigatório.`;
      } else {
          return 'Campo obrigatório.';
      }
      }
    };

    return Object.keys(control.errors)
      .filter(key => key in errorMessages && control.errors![key])
      .map(key => errorMessages[key](control.errors![key]));
  }

  /**
   * Formats a value based on its type.
   * @param {number | Date} value - The value to format.
   * @param {string} type - The type of the value.
   * @returns {string} The formatted value.
   */
  private formatValue(value: number | Date, type: string): string {
    if (type === 'date' && typeof value === 'number') {
      return new Date(value).toLocaleDateString();
    }
    return value.toString();
  }

  /**
   * This method is used to validate a CPF (Cadastro de Pessoas Físicas).
   * It implements the standard CPF validation algorithm.
   *
   * @returns {ValidatorFn} A validator function that takes an AbstractControl as input and returns ValidationErrors or null.
   */
  validateCpf(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const cpf = control.value;
      if (!cpf) return null;

      const cleanCpf = cpf.replace(/\D/g, '');
      if (cleanCpf.length !== 11 || /^(\d)\1{10}$/.test(cleanCpf)) {
        return {cpf: true};
      }

      let sum = 0, remainder;
      for (let i = 1; i <= 9; i++) {
        sum = sum + parseInt(cleanCpf.substring(i - 1, i)) * (11 - i);
      }
      remainder = (sum * 10) % 11;

      if ((remainder === 10) || (remainder === 11)) remainder = 0;
      if (remainder !== parseInt(cleanCpf.substring(9, 10))) return {cpf: true};

      sum = 0;
      for (let i = 1; i <= 10; i++) {
        sum = sum + parseInt(cleanCpf.substring(i - 1, i)) * (12 - i);
      }
      remainder = (sum * 10) % 11;

      if ((remainder === 10) || (remainder === 11)) remainder = 0;
      if (remainder !== parseInt(cleanCpf.substring(10, 11))) return {cpf: true};

      return null;
    };
  }
}

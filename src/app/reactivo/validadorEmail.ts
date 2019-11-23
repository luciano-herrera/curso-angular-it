//ValidatorFn una estructura de Angular
//AbstractControl es un elemento del DOM, que lo sacas de ahí: input, h1, div
import { AbstractControl, ValidatorFn } from '@angular/forms';

//validadorEmail: ValidatorFn, eso quiere decir el tipo de dato que devuelve la fn
export function validadorEmail(emailExp: RegExp): ValidatorFn {
  return (control:AbstractControl): {[key:string] : any} => {
    //match o test para expresiones regulares es lo mismo
    const email = emailExp.test(control.value);
    return !email ? {'Email': {value: control.value}}: null
  }
}
import { AbstractControl, ValidationErrors } from "@angular/forms";


export function searchValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';

    //check any special characters
    const isAlpaNumericOnly = /^[a-zA-Z0-9\s]*$/.test(value);
    //check only whitespaces
    const onlySpaces = value.length > 0 && value.trim().length === 0;
    if(!isAlpaNumericOnly) return {'pattern': true};
    if(onlySpaces) return {'whitespace': true};
    return null;
}
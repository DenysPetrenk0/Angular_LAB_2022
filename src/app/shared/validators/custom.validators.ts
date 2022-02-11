import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidator {

    static dateValidator(control: AbstractControl): ValidationErrors | null {
        if (control.value !== undefined && (isNaN(control.value) && control.value.match(/^(\d{2}\/\d{2}\/\d{4})/gi))) {
            return { renge: true }
        }
        return null
    }

    static durationValidator(control: AbstractControl): ValidationErrors | null {
        if (control.value !== undefined && (isNaN(control.value) || control.value < 1 || control.value > 600)) {
            return { renge: true }
        }
        return null
    }
}
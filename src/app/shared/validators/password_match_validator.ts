import { AbstractControl } from "@angular/forms"

export const passwordMatchValidator = (passwordControlName:string,
    confirmPasswordControlName:string) =>{
        const Validators = (form:AbstractControl) =>{
        const passwordControl = form.get(passwordControlName);
        const confirmpasswordControl = form.get(confirmPasswordControlName);
        
if(!passwordControl||!confirmpasswordControl)  return;
       
if(passwordControl.value !== confirmpasswordControl.value){
            confirmpasswordControl.setErrors({notMatch:true});

        }else{
            const error = confirmpasswordControl.errors;
            if(!error) return;

            delete error .notMatch;
            confirmpasswordControl.setErrors(error);

        }
        }

        return Validators;
    }
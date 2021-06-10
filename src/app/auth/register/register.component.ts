import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { AbstractControlOptions } from "@angular/forms";

import { UsuarioService } from 'src/app/services/usuario.service';
import { fnpasswordsIguales } from './fnpasswordsIguales.directive';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})

export class RegisterComponent {

  public formSubmitted = false;

  public registerForm: FormGroup = new FormGroup(

    {
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,]),
      password2: new FormControl('', [Validators.required]),
      terminos: new FormControl(false, Validators.requiredTrue)
    },
    {
      validators: this.passwordsIguales('password', 'password2')
    } as AbstractControlOptions
  );

  // validators: fnpasswordsIguales

  constructor(private fb: FormBuilder,
    private userService: UsuarioService,
    private router: Router
  ) { }


  crearUsuario(): void {

    this.formSubmitted = true;

    console.log(this.registerForm.value);

    if (this.registerForm.invalid) {
      return;
    }




    this.userService.crearUsuario(this.registerForm.value)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl('/dashboard');
      }
        , (err) => {

          //si hay error
          Swal.fire('Error', err.error.msg, 'error');

        });

  }

  campoNoValido(campo: string): boolean {

    if (this.registerForm.get(campo).invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }


  contrasenasNoValidas(): boolean {

    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;
    if (pass1 !== pass2 && this.formSubmitted) {
      return true;
    } else {
      return false;
    }

  }

  passwordsIguales(pass1: string, pass2: string) {


    return (formgroup: FormGroup) => {




      const pass1Control = formgroup.get(pass1);
      const pass2Control = formgroup.get(pass2);


      pass2Control.setErrors({ motherfucker: 'nop es posible' });

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null)
      } else {
        pass2Control.setErrors({ noEsIgual: true })
        formgroup.setErrors({ contrasenasAreNotEqual: true })
      }



    }

  }


  aceptaTerminos(): boolean {
    return !this.registerForm.get('terminos').value && this.formSubmitted;
  }






}


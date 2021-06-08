import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;



  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UsuarioService
  ) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required,]),
        remember: new FormControl(false)
      }
    );

  }


  login() {


    if (this.loginForm.invalid) {
      this.loginForm.get("email").markAsDirty();
      this.loginForm.get("password").markAsDirty();
      return;
    }

    console.log(this.loginForm.value);


    this.userService.login(this.loginForm.value).subscribe(
      resp => {
        console.log(resp);
      },
      (error) => {

        Swal.fire('Error',error.error.msg, 'error');
      }

    );


  }

}

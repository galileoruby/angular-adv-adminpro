import { Component, NgZone, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})



export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public auth2: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UsuarioService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(localStorage.email || '', [Validators.required, Validators.email,]),
      password: new FormControl('', [Validators.required]),
      remember: new FormControl(false),
    });

    this.renderButton();
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.get('email').markAsDirty();
      this.loginForm.get('password').markAsDirty();
      return;
    }

    // console.log(this.loginForm.value);

    this.userService.login(this.loginForm.value).subscribe(
      (resp) => {
        if (this.loginForm.get('remember').value) {
          localStorage.email = this.loginForm.get('email').value;
        } else {
          localStorage.removeItem('email');
        }

        this.ngZone.run(() => {
          //navegar a 
          this.router.navigateByUrl('/dashboard');
        });
      },
      (error) => {
        Swal.fire('Error', error.error.msg, 'error');
      }
    );
  } //login



  renderButton() {

    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
    });

     this.startApp();
  }

  async startApp() {
    // console.log('gapi.load(');

    await this.userService.googleInit();

    this.auth2 = this.userService.auth2;
    this.attachSignin(document.getElementById('my-signin2'));



  }


  attachSignin(element) {
    // console.log(element.id);
    console.log('attachsigned');
    this.auth2.attachClickHandler(element, {},
      (googleUser: any) => {

        const id_token = googleUser.getAuthResponse().id_token;


        this.userService.loginGoogle(id_token)
          .subscribe(
            respuesta => {
              // console.log(id_token);
              this.ngZone.run(() => {

                this.router.navigateByUrl('/');
                
              });
            }

          )

        //navegar a 

      }, (error: any) => {
        alert(JSON.stringify(error, undefined, 2));
      });


      
  }
}

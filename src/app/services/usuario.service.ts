import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';
import { promise } from 'protractor';

const base_url = environment.base_url;

declare const gapi: any;



@Injectable({
  providedIn: 'root'
})


export class UsuarioService {


  public auth2: any;


  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone,
    private window: Window

  ) {
    // this.googleInit();

  }



  googleInit() {

    return new Promise<void>(resolve => {


      gapi.load('auth2', () => {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        this.auth2 = gapi.auth2.init({
          client_id: '74894576610-1kvmhajb8mm75h3atkht2c65i9379sln.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin'
        });
        resolve();
      });

    });


  }

  logOut() {
 
    localStorage.removeItem('token');
    var aush = gapi.auth2.getAuthInstance();

    aush.signOut().then(() => {
      this.ngZone.run(() => {
        // aush.disconnect();
        this.router.navigateByUrl('/login');
      });
    });

  }

  validarToken(): Observable<boolean> {
    const token = localStorage.token || '';


    return this.http.get(`${base_url}/login/renew`,
      {
        headers: {
          'x-token': token
        }
      }).pipe(
        tap((resp: any) => {
          localStorage.token = resp.token;
        }),
        map(resp => true),
        catchError(error => of(false))
      );



  }


  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${base_url}/usuarios`, formData)
      .pipe(
        tap((respuesta: any) => {
          localStorage.token = respuesta.token;
        })
      );
  }


  login(formData: LoginForm) {
    return this.http.post(`${base_url}/login`, formData)
      .pipe(
        tap((respuesta: any) => {
          localStorage.token = respuesta.token;
        })
      );
  }



  loginGoogle(token: string) {
    return this.http.post(`${base_url}/login/google`, { token })
      .pipe(
        tap((respuesta: any) => {
          localStorage.token = respuesta.token;
        })
      );
  }




} //...UsuarioService

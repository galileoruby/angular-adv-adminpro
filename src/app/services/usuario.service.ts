import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient

  ) { }


  crearUsuario(formData: RegisterForm) {

    console.log('creando usuario');
    return this.http.post(`${base_url}/usuarios`, formData);

  }


  login( formData: LoginForm){


    console.log('login usuario con post');


    return this.http.post(`${base_url}/login`, formData);
    
  }




}

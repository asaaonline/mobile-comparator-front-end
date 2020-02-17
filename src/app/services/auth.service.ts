import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LOGIN_URL, SIGN_UP_URL} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(registerForm: FormGroup) {

    const body = {
      name: registerForm.value.firstName + registerForm.value.lastName,
      tel: registerForm.value.tell,
      address: registerForm.value.address,
      password: registerForm.value.password,
      email: registerForm.value.email
    };


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(SIGN_UP_URL, body, httpOptions).toPromise();

  }

  login(loginForm: FormGroup) {

    const body = {
      userName: loginForm.value.userName,
      password: loginForm.value.password,

    };


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(LOGIN_URL, body, httpOptions).toPromise();
  }
}

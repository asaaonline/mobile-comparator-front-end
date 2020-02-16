import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

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
    };


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(body, httpOptions);

  }
}

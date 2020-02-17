import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private auth: AuthService, private route: Router, private cookieService: CookieService) {

  }

  ngOnInit() {

    this.loginForm = new FormGroup({
      'userName': new FormControl(''),
      'password': new FormControl(''),
      'sub': new FormControl(''),
    });
  }

  async submit() {
    let object = await this.auth.login(this.loginForm);
    console.log(object);
    if (object['status'] === 'successful') {
      this.cookieService.set('user', object['result'].id);
      this.cookieService.set('userName', JSON.stringify(object['result']));
      this.route.navigate(['']);
    }
    this.loginForm.reset({
      userName: '',
      password: '',

    });
  }

}

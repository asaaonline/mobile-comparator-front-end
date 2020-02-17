import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private auth: AuthService, private route: Router,private cookieService: CookieService) {

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
    if (object['status'] === "successful") {
      this.cookieService.set('user', object.toString());
      this.route.navigate(['']);
    }
    this.loginForm.reset({
      userName: '',
      password: '',

    });
  }

}

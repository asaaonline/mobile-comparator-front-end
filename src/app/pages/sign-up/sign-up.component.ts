import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private auth: AuthService, private route: Router) {
  }

  ngOnInit() {

    this.registerForm = new FormGroup({
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'password': new FormControl(''),
      'address': new FormControl(''),
      'email': new FormControl(''),
      'tell': new FormControl(''),
      'sub': new FormControl(''),
    });
  }

  async submit() {
    let object = await this.auth.register(this.registerForm);
    console.log(object);
    if (object['status'] = 'successful') {

      this.route.navigate(['']);
    }
    this.registerForm.reset({
      firstName: '',
      lastName: '',
      password: '',
      address: '',
      email: '',
      tell: '',
    });
  }
}

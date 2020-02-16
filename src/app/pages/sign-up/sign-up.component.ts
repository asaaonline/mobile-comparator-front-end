import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {SearchResult} from '../../model/search-respons/search-result';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private auth: AuthService) {
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

  submit() {
    this.auth.register(this.registerForm).subscribe(
      (response: SearchResult) => {

      }
    );
  }
}

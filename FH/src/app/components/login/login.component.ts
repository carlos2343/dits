import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor() {}

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.get('email');
  }

  submit() {
    // do something with the form data, like sending it to a server
    console.log(this.loginForm.value);
  }

  get password() {
    return this.loginForm.get('password');
  }
  
}

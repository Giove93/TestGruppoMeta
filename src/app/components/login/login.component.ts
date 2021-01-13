import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : any;

  constructor(private authService:AuthService, private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
    });
   }

  ngOnInit(): void {
  }

  login(){
   
  }

}

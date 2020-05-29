import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  alert:boolean = false;
  email:string;
  password:string;

  constructor(private resto:CommonService, private router:Router) { }

  ngOnInit(): void {
  }
  logIn(){
    
  }

}

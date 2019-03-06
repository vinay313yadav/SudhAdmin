import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
 import { Myservice } from '../my.service';
 import { Router, ActivatedRoute } from '@angular/router';
 import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users:any
  myarray = new Array();
  returnUrl: string;
  public myForm: FormGroup;
  loading = false;
  submitted = false;
  username: any;
  password: any
 

  constructor(  private myServices : Myservice, private router: Router,  public authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  get f() { return this.myForm.controls; }

  userModel = {username:"", password: ""}

  
  onSubmit() {

    console.log(this.userModel)
    this.myServices.Adminlogin(this.userModel)
    .subscribe(
      data => {
        this.users = data
        console.log('rfrfrf+++++++',this.users.username)
        this.router.navigate(['orderhistory']);
        console.log(data);
        console.log("hello");
        localStorage.setItem('isLoggedIn', "true");
        this.router.navigate([this.returnUrl]);
      },
      error => {
        console.log(error);
        alert('Check Your User_name and Password !! :-')
      }
    );
    }
  

}


// this.submitted = true;

// // stop here if form is invalid
// if (this.registerForm.invalid) {
//     return;
// }

// alert('SUCCESS!! :-)')
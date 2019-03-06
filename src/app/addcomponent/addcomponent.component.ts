import { Component, OnInit,  ElementRef, ViewChild } from '@angular/core';
import { Myservice } from '../my.service';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { users } from '../user/usinter';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-addcomponent',
  templateUrl: './addcomponent.component.html',
  styleUrls: ['./addcomponent.component.css']
})
export class AddcomponentComponent implements OnInit {
SelectedFile: File = null;
form: FormGroup;
req:any;


@ViewChild('fileInput') fileInput: ElementRef;

  constructor(private myServices : Myservice, private _http : HttpClient, private fb: FormBuilder, private router: Router, public authService: AuthService) { }


  ngOnInit() {
  }
  userModel = {name:'', price:'', category:'', discount: '', avatar:''}

 
  onFileSelected(event){
    this.SelectedFile = <File>event.target.files[0];
    console.log(event)
  }


  AddProduct(user: any)
  {
   const body = JSON.stringify(user);
   console.log(body);
   const fb = new FormData();
    fb.append('image', this.SelectedFile)
     fb.append('name', this.userModel.name)
     fb.append('price', this.userModel.price)
     fb.append('category', this.userModel.category)
     fb.append('discount', this.userModel.discount)

  const vinay =  fb;
   console.log( user );
   return this._http.post('http://sheltered-woodland-33544.herokuapp.com/admin_addproduct' , vinay  )
  }

  onSubmit(){
   console.log(this.userModel)
   this.AddProduct(this.userModel)
   .subscribe(res=>{
     this.userModel  = {name:'', price:'', category:'', discount: '', avatar:''}
    console.log(res)
   },
   error =>{
     console.log(error)
     alert('Pls choose image !! :-')
   }
   );
   }

   logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['']);
  }

  }

  







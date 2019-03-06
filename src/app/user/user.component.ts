import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service'
import {HttpClient} from '@angular/common/http';
import { users } from './usinter'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { __param } from 'tslib';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  SelectedFile: File = null;

req:any;
   res : users [] = [];
  users: any;
  switchMap: any
  eventId: string;

  

  constructor(private myservice: Myservice, private route: ActivatedRoute,  private _http : HttpClient, private router: Router, public authService: AuthService) { }

  userModel = {name:'', price:'', category:'', discount: '', id:''}
  userModel12 = {image:''}
  

  onFileSelected(event){
    this.SelectedFile = <File>event.target.files[0];
    console.log(event)
  }
  

  ngOnInit()  {  
this.route.params;
  this.route.paramMap.subscribe(parameterMap =>{
   const  id = parameterMap.get('id')
    console.log('werwrwerew',id)
    this.myservice.ButtonUpdate(id)
    .subscribe(res=>{
      this.users = res
   
      console.log('jjnjnjnjn', this.users.category)
      console.log('jjnjnjnjn', this.users.image)
     // console.log('asdasdasdas',res)
    this.userModel = {name:this.users.name, price:this.users.price, category:this.users.category, discount:this.users.discount, id}
    this.userModel12 = { image:this.users.image}
    })
  })
}


AddProduct(user: any)
  {
   const body = JSON.stringify(user);
   console.log(body);
   const fb = new FormData();
    fb.append('image', this.SelectedFile)
    fb.append('id', this.userModel.id);
     fb.append('name', this.userModel.name)
     fb.append('price', this.userModel.price)
     fb.append('category', this.userModel.category)
     fb.append('discount', this.userModel.discount)
        console.log('hhbhbhbhb',this.SelectedFile)
  const vinay =  fb
   return this._http.post('http://sheltered-woodland-33544.herokuapp.com/admin_addproduct/update ' , vinay )
  }



  onSubmit()
  {
    this.router.navigate(['orderhistory']);
    this.AddProduct (this.userModel)
    .subscribe(res=>{
      console.log(res)
    })
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['']);
  }



  }


  


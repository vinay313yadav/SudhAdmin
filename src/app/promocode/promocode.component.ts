import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service'
import { AuthService } from '../auth.service';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-promocode',
  templateUrl: './promocode.component.html',
  styleUrls: ['./promocode.component.css']
})
export class PromocodeComponent implements OnInit {
  reset:any
  myform: FormGroup

  constructor(private myservices:Myservice, public authService: AuthService, private router: Router,) { }

  ngOnInit() {
//   this.myform = new FormGroup({
//  'pcode' : new FormControl(null),
//  'pcodedis': new FormControl(null),
//  'pcsdate': new FormControl(null),
//  'pcedate': new FormControl(null)
//   })
  }

   userModel = {pcode:'', pcodedis:'', pcsdate:'', pcedate:''}

  onSubmit()
  {
    console.log('hello')
    this.myservices.Promocode(this.userModel)
    .subscribe(res=>{
      console.log(res)
      this.userModel = {pcode:'', pcodedis:'', pcsdate:'', pcedate:''}
  //   this.userModel.pcode = '';
  //  // this.userModel ={res:''}
  

    })

}
logout(): void {
  console.log("Logout");
  this.authService.logout();
  this.router.navigate(['']);
}
  
}


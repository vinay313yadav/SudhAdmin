import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service'
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  table : any;
  public searchText : string;
  public customerData : any;
  
  constructor(private myservices: Myservice, private router: Router,  public authService: AuthService, private _http : HttpClient) { }

  ngOnInit() {
    console.log('hello')
    return this._http.get('http://sheltered-woodland-33544.herokuapp.com/admin_alluser')
    .subscribe(res=>{
      this.table = res
      console.log(res)
      console.log(this.table)
      console.log('hello')
    })

  }

   
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['']);
  }

}

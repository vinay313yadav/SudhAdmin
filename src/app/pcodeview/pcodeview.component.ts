import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service'
import { AuthService } from '../auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-pcodeview',
  templateUrl: './pcodeview.component.html',
  styleUrls: ['./pcodeview.component.css']
})
export class PcodeviewComponent implements OnInit {
table:any;
splice:any;
private fieldArray: Array<any> = [];
  constructor( private myservices:Myservice, public authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log('Hello')
    this.myservices.ViewPromo()
    .subscribe(res=>{
      this.table = res
      console.log(this.table)

      console.log(res)
    })
  }


  myFunction(id){
    var view;
    if(confirm("Please Conforme Your Delete this..!")){
      view = "You pressed OK!";
      this.table.splice(id, 1);
      const i =   this.myservices.DeletePromo(id)
      .subscribe(res=>{
       console.log(i)
        this.table = res
       this.table.splice(i,0)
       console.log('dhbcdhbcdhbcdh', this.table)
        console.log(res)
        console.log('hello')
        alert('Are you sure Delete This  !! :-')
      },
      
      error =>{
        console.log(error)
      }
      )
    }
    else {
      view = "You pressed Cancel!";
    }
  }


  // deleteuser(id)
  // {
  //  const i =   this.myservices.DeletePromo(id)
  //    .subscribe(res=>{
  //     console.log(i)
  //      this.table = res
  //     this.table.splice(i,0)
  //     console.log('dhbcdhbcdhbcdh', this.table)
  //      console.log(res)
  //      console.log('hello')
  //      alert('Are you sure Delete This  !! :-')
  //    })
     
  // }
  

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['']);
  }

}

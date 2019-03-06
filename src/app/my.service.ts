import { Injectable } from '@angular/core';
//import {Response, Headers } from "@angular/http";
import {HttpClient} from '@angular/common/http';
import { analyzeAndValidateNgModules, identifierModuleUrl } from '@angular/compiler';


@Injectable({
    providedIn: 'root'
  })

  export class Myservice {
    SelectedFile: File = null;
    id:null;
    private modals: any[] = [];

      constructor(private _http : HttpClient ) {}

      onFileSelected(event){
        this.SelectedFile = <File>event.target.files[0];
      }

 Adminlogin(user: any)
 {
    const body = JSON.stringify(user);
    const header = new Headers();
    header.append("content-Type", "application/json" );
    console.log( user );
    return this._http.post('http://sheltered-woodland-33544.herokuapp.com/adminpanel' , user)
    console.log(body);
 }



 ViewProduct()
 {

   return this._http.get('http://sheltered-woodland-33544.herokuapp.com/admin_viewproduct')
 }

Deleteproduct(id)
{
 
   return this._http.get(' http://sheltered-woodland-33544.herokuapp.com/admin_viewproduct/delete/'+id)
}

 ButtonUpdate( id){
 

  return this._http.get('http://sheltered-woodland-33544.herokuapp.com/admin_viewproduct/update/'+id )
 }

 Updateproduct( user: any )
 {
  const body = JSON.stringify(user);
  const header = new Headers();
  header.append("content-Type", "application/json" );
  console.log( user );
  return this._http.post('http://sheltered-woodland-33544.herokuapp.com/admin_addproduct/update ' , user ,{responseType:'json'})

 } 


 Userdetail()
 {
   return this._http.get('http://sheltered-woodland-33544.herokuapp.com/admin_alluser')
 }

 Promocode(user)
 {
      const body = JSON.stringify(user)
      const header = new Headers();
      console.log(body)
      header.append("content-Type", "application/json" );
      return this._http.post('http://sheltered-woodland-33544.herokuapp.com/addpromo', user)
 }

 ViewPromo()
 {
   return this._http.get('http://sheltered-woodland-33544.herokuapp.com/viewpromo')
 }

 DeletePromo(id)
 {
   return this._http.get('http://sheltered-woodland-33544.herokuapp.com/viewpromo/delete/'+id)
 }


 add(modal: any) {
  // add modal to array of active modals
  this.modals.push(modal);
}

remove(id: string) {
  // remove modal from array of active modals
  this.modals = this.modals.filter(x => x.id !== id);
}

open(id: string) {
  // open modal specified by id
  let modal: any = this.modals.filter(x => x.id === id)[0];
  modal.open();
}

close(id: string) {
  // close modal specified by id
  let modal: any = this.modals.filter(x => x.id === id)[0];
  modal.close();
}

  }
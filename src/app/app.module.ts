import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeshbordComponent } from './deshbord/deshbord.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddcomponentComponent } from './addcomponent/addcomponent.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { Myservice} from './my.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { PromocodeComponent } from './promocode/promocode.component';
import { PcodeviewComponent } from './pcodeview/pcodeview.component';
import { GrdFilterPipe } from './grd-filter.pipe';


const appRoutes: Routes = [
  { path: 'deshbord', component: DeshbordComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'addcard', component: AddcomponentComponent , canActivate: [AuthGuard]},
  { path: 'orderhistory', component: OrderhistoryComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UserComponent,  canActivate: [AuthGuard] },
  { path: 'Userdetail', component: UserdetailComponent, canActivate: [AuthGuard] },
  { path: 'promocode', component: PromocodeComponent, canActivate: [AuthGuard] },
  { path: 'ViewPromocoded', component: PcodeviewComponent, canActivate: [AuthGuard] },
 
];

@NgModule({
  declarations: [
    AppComponent,
    DeshbordComponent,
    LoginComponent,
    AddcomponentComponent,
    OrderhistoryComponent,
    UserComponent,
    UserdetailComponent,
    PromocodeComponent,
    PcodeviewComponent,
    GrdFilterPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [Myservice, AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }

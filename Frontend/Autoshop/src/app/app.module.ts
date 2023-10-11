import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'; //aici
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexCarsComponent } from './cars/containers/index-cars/index-cars.component';//aici
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { IndexComponentsComponent } from './components/containers/index-components/index-components.component';
import { LoginComponent } from './login/login.component';
import { ShowUserComponent } from './users/containers/show-user/show-user.component';
import { IndexUserComponent } from './users/containers/index-user/index-user.component';//aici
@NgModule({
  declarations: [
    AppComponent,
    IndexCarsComponent, //aici
    IndexComponentsComponent, LoginComponent, ShowUserComponent, IndexUserComponent,// aici 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule, //aici
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

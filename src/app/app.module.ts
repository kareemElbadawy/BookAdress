import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AddressDetailComponent } from './addresses/address-detail/address-detail.component';
import { AddressListComponent } from './addresses/address-list/address-list.component';
import { AddressService } from './shared/address.service';
import { UserService } from './shared/user.service';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    AddressesComponent,
    AddressDetailComponent,
    AddressListComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AddressService,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

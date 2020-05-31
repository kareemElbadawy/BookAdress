import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesComponent } from './addresses/addresses.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth.guard';
const appRoutes: Routes = [
      // { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },

  { path: 'address', component: AddressesComponent ,canActivate:[AuthGuard] },
  { path: 'Signup', component: SignUpComponent },
  {
    path: 'login', component: SignInComponent
  },
{ path : '', redirectTo:'/login', pathMatch : 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }








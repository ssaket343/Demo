import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustComponent } from './cust/cust.component';
import { SigninComponent } from './signin/signin.component';
import { AsideComponent } from './aside/aside.component';





const routes: Routes = [
  
  {path: 'signin', component: SigninComponent},
  {path: 'cust', component: CustComponent},
  {path: 'Aside', component: AsideComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

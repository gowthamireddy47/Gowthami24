import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { TenantprimaryComponent } from './tenantprimary/tenantprimary.component';
import { TenantsecondaryComponent } from './tenantsecondary/tenantsecondary.component';
import { ObligationsComponent } from './obligations/obligations.component';


const routes: Routes = [
  {path:'registration',component:RegistrationComponent},
  {path:'primary',component:TenantprimaryComponent},
  {path:'secondary',component:TenantsecondaryComponent},
  {path:'obligations',component:ObligationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

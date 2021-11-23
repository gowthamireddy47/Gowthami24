import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TenantprimaryComponent } from './tenantprimary/tenantprimary.component';
import { TenantsecondaryComponent } from './tenantsecondary/tenantsecondary.component';
import { ObligationsComponent } from './obligations/obligations.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    TenantprimaryComponent,
    TenantsecondaryComponent,
    ObligationsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

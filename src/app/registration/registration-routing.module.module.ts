import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '/new-hero', component: RegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModuleModule { }

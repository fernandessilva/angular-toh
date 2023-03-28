import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MaterialModule, DashboardRoutingModule, FlexLayoutModule],
})
export class DashboardModule {}

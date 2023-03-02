import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegistrationComponent } from './registration.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../core/material/material.module';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, MatFormFieldModule, MaterialModule, RegistrationModule, FlexLayoutModule],
})
export class RegistrationModule {}

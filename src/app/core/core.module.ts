import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeroesModule } from '../heroes.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MaterialModule } from '../material.module';
import { ToggleComponent } from './components/toggle/toggle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const COMPONENTS = [ToolbarComponent, PageNotFoundComponent, ToggleComponent];
const MODULES = [
  FlexLayoutModule,
  MaterialModule,
  RouterModule,
  MatDialogModule,
  HeroesModule,
  SweetAlert2Module.forRoot(),
  FormsModule,
  ReactiveFormsModule,
  Ng2SearchPipeModule,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES, CommonModule],
  exports: [COMPONENTS, MODULES],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import this module in the AppModule.'
      );
    }
  }
}

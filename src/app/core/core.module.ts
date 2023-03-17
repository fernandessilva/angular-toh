import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MessagesComponent } from './components/messages/messages.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HeroesModule } from '../heroes.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


const COMPONENTS = [ToolbarComponent, MessagesComponent, PageNotFoundComponent];
const MODULES = [FlexLayoutModule, MaterialModule, RouterModule, MatDialogModule, HeroesModule, SweetAlert2Module.forRoot()];

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

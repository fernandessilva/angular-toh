import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MessagesComponent } from './components/messages/messages.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const COMPONENTS = [ToolbarComponent, MessagesComponent, PageNotFoundComponent];
const MODULES = [FlexLayoutModule, MaterialModule, RouterModule];

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

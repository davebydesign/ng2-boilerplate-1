import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './base.routing';
import { BaseComponent } from './base.component';

@NgModule({
  imports:      [
  	CommonModule,
  	routing
  ],
  providers: [],
  declarations: [
      BaseComponent
  ],
  exports: []
})
export class BaseModule {

}

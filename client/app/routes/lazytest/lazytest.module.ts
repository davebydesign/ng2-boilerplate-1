import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing } from './lazytest.routing';
import { LazytestComponent } from './lazytest.component';

@NgModule({
  imports:      [
  	CommonModule,
  	routing
  ],
  providers: [],
  declarations: [
      LazytestComponent
  ],
  exports: []
})
export class LazytestModule {

}

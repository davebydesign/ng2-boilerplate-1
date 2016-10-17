import { Routes, RouterModule } from "@angular/router";


export const appRoutes: Routes = [


  { path: "",        loadChildren: () => require('es6-promise!./routes/base/base.module')('BaseModule')},
  { path: "lazy",    loadChildren: () => require('es6-promise!./routes/lazytest/lazytest.module')('LazytestModule')}

];


export const AppRouting = RouterModule.forRoot(appRoutes, { useHash: false});
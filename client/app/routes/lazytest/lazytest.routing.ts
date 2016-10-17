import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LazytestComponent } from './lazytest.component';

const routes: Routes = [
    {path: '', component: LazytestComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

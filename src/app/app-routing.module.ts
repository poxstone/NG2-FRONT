import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { LogsComponent } from './logs/logs.component';
import { ListComponent } from './list/list.component';
import { LogInnerComponent } from './log-inner/log-inner.component';

const appRoutes: Routes = [
  {
    path: 'a/:tenant/admin',
    component: ListComponent
  },
  {
    path: 'a/:tenant/logs',
    component: LogsComponent
  },
  {
    path: 'a/:tenant/logs/:query',
    component: LogInnerComponent 
  },
  {
    path: 're',
    redirectTo: '/a/re.com/admin',
    pathMatch: 'full'// redirect exactly path "re"
  },
  {
    path: '**',
    component: Page404Component 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {};

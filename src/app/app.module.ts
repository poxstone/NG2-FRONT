import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
// depends
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthService, AppGlobals } from 'ng2-google-login';

import { AppComponent } from './app.component';
import { LogsComponent } from './logs/logs.component';
import { ListComponent } from './list/list.component';
import { Page404Component } from './page404/page404.component';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const appRoutes: Routes = [
  {
    path: 'a/:tenant/admin',
    component: ListComponent
  },
  {
    path: 'a/:tenant/logs/:user',
    component: LogsComponent
  },
  {
    path: '**',
    component: Page404Component 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    ListComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

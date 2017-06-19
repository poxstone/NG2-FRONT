import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// depends
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthService, AppGlobals } from 'ng2-google-login';

// routings and components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { LogsComponent } from './logs/logs.component';
import { ListComponent } from './list/list.component';
import { LogInnerComponent } from './log-inner/log-inner.component';

// services
import { MessagesService } from './services/messages.service';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    ListComponent,
    Page404Component,
    LogInnerComponent
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
    AppRoutingModule
  ],
  providers: [
    AuthService,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

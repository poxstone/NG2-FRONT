import { Component, NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService, AppGlobals } from 'angular2-google-login';
import { Profile } from './models/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  translate:TranslateService;
  profile:Profile = new Profile();

  constructor(
    public zone: NgZone,
    translate: TranslateService,
    private googleAuth: AuthService 
  ) {
    this.translate = translate;
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.use('en');
    this.zone.run( () => {} ); // fox doble click to work
  }

  ngOnInit() {
    AppGlobals.GOOGLE_CLIENT_ID = '448548789014-su3rs3853if9vabnpuinr6d4nmku2log.apps.googleusercontent.com';
    this.loging(); // fix double click
  }

  loging(){
    this.googleAuth.authenticateUser( () => {
      // google component saves in localStorage
      this.profile = new Profile(
        localStorage.getItem('token'),
        localStorage.getItem('name'),
        localStorage.getItem('image'),
        localStorage.getItem('email')
      );
      // forcer reload
      this.zone.run( () => {} );//fix double click
    } );
  };

  logout(){
    this.googleAuth.userLogout(()=>{
      console.log('logout', this.googleAuth);
    });
  };

}

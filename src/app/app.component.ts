import { Component, NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService, AppGlobals } from 'ng2-google-login';
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
  apis:any = [
    {apiName:'helloworld', apiVersion:'v1'},
    {apiName:'hello2', apiVersion:'v1'},
  ];

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
    // define global apis
    AppGlobals.GOOGLE_CLIENT_ID = '448548789014-su3rs3853if9vabnpuinr6d4nmku2log.apps.googleusercontent.com';
    AppGlobals.SCOPES = 'profile email';
    AppGlobals.APIROOT = 'endpoint2-dot-efor-gae-temp-01.appspot.com';
    AppGlobals.APILOCAL = 'localhost:8080';
    AppGlobals.EXTAPI = false;
    this.loging();// autoload
  }

  apiExample() {
    this.googleAuth.client.helloworld.greetings.listGreeting()
      .execute(res => {
        console.log(res);
        this.valueFromApi = res;
      } );
  }

  loging(){
    this.googleAuth.apiInit(this.apis, (result) => {
      // google component saves in localStorage
      this.profile = new Profile(
        result['token'],
        result['name' ],
        result['image'],
        result['email']
      );
      console.log('user data:', result)
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

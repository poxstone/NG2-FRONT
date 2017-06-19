import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Message } from '../models/message';

@Injectable()
export class MessagesService {
  //private messagesUrl = '//localhost:8080/_ah/api/helloworld/v1/hellogreeting';
  private messagesUrl = '//endpoint2-dot-efor-gae-temp-01.appspot.com/_ah/api/helloworld/v1/hellogreeting';

  constructor(private http: Http) { }

  getItems():Observable<Message[]> {
    return this.http.get(this.messagesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.items || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

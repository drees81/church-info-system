import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Configuration } from '../app.constants';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MessageService {

    private headers: Headers;

    private actionUrl: string;

    constructor(private _http: Http, _configuration: Configuration) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

        this.actionUrl = _configuration.ApiUrl + '/message';
    }

    public SendMessage(destination: string, message: string) {
      console.log('[MessageService] sendMessage to ' + destination + ': ' + message);

      const requestBody = {
        'userId': destination,
        'messageText': message,
        'priority': 'normal'
      }

      this._http.put(this.actionUrl, requestBody)
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}

import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Service } from '../models/service';
import { Configuration } from '../app.constants';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class ServiceService {

    public apiUrl: string;
    private headers: Headers;

    constructor(private _http: Http) {
        this.headers = new Headers()
        this.headers.append('Content-Type', 'application/json')
        this.headers.append('Accept', 'application/json')
    }

    public GetAll = (): Observable<Service[]> => {
        return this._http.get(this.apiUrl + '/services')
            .map((response: Response) => <Service[]>response.json())
            .catch(this.handleError);
    }

    public CreateNew = (service): Observable<Service> => {
        return this._http.post(this.apiUrl + '/services', service)
            .map((response: Response) => <string>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error('-'  + error +'-'+ error.json().error)
        return Observable.throw(error.json().error || 'Server error');
    }
}

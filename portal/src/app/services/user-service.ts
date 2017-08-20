import { Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../models/User';
import {Configuration } from '../app.constants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {

    public apiUrl: string;
    private headers: Headers;

    constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<User[]> => {
        return this._http.get(this.apiUrl + '/users')
            .map((response: Response) => <User[]>response.json())
            .catch(this.handleError);
    }

    public GetSingle = (id: number): Observable<User> => {
        return this._http.get(this.apiUrl + '/users' + id)
            .map((response: Response) => <User>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ClimaService {
    constructor(
        public _http: HttpClient
    ){
    }

    show(ciudad:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get('http://api.weatherapi.com/v1/current.json?key=b205d9ddb413480fbf3201457232306&q='+ ciudad +'&aqi=no', { headers: headers });
    }

    historial(ciudad:string, fecha:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get('https://api.weatherapi.com/v1/future.json?key=b205d9ddb413480fbf3201457232306&q='+ ciudad +'&dt='+ fecha, { headers: headers });
    }
}
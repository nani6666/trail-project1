import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Headers, Http, HttpModule, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestcallsService {

  constructor(private _http: Http) { }

  getAllCurrencies(): Observable<any> {
    return this._http.get('./assets/json/currency.json')
      .map((res: Response) => res)
      .catch((error: any) => error);
  }
}

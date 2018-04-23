import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Headers, Http, HttpModule, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const API_URL = 'https://sdp1devapp3.azurewebsites.net/api';
@Injectable()
export class RestcallsService {
 options ;
  constructor(private _http: Http) { }

  getAllCurrencies(): Observable<any> {
    return this._http.get('./assets/json/currency.json')
      .map((res: Response) => res)
      .catch((error: any) => error);
  }

  /*post call starts */
  PostCall(urlval , obj): Observable<any> {
    return this._http.post(API_URL + urlval , obj , this.options)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
  /*post call ends */

   /*GET call starts */
   getCall(urlval): Observable<any> {
    return this._http.get(API_URL + urlval)
      .map((res: Response) => res)
      .catch((error: any) => error);
  }
    /*GET call Ends */

    /*GET call by parameter starts */
    getCallByParameter(urlval , id): Observable<any[]> {
      return this._http.get(API_URL + urlval + id)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }
    /*GET call by parameter Ends */

    /* delete by id call start */
    deleteCall(id , urlval): Observable<any[]> {
      // console.log("deleteUser service request => ", id);
      return this._http.delete(API_URL + urlval + id)
        .map((res: Response) => res)
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }
    /* delete call Ends */

    /*update call Starts*/
    updateCall(urlval , data): Observable<any[]> {
      return this._http.put(API_URL + urlval , data)
        .map((res: Response) => res)
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }
    /*update Call Ends */
}

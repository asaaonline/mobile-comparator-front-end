import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchRequestHandlingService {

  constructor(private http: HttpClient) {
  }

  public sendRequest(searchKey: any, url: string) {

    let param = new HttpParams();
    param = param.set('searchKeyWord', searchKey);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }), params: param
    };

    return this.http.get(url, httpOptions);
  }

  public sendGetRequest( url: string) {


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(url, httpOptions);
  }
}

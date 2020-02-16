import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneRequestHandlingService {

  constructor(private http: HttpClient) {
  }

  sendRequest(id: any, url: string) {


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(url + id, httpOptions);
  }
}

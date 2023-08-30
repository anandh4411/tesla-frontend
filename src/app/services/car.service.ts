import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getCars(): Observable<any> {
    return this.http.get(this.apiUrl + 'cars');
  }

  public getCarDetails(id:any): Observable<any> {
    return this.http.get(this.apiUrl + 'car/' + id);
  }
}

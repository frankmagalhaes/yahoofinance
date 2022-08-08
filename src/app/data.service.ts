import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = environment.baseAPI;
  
  constructor(private http: HttpClient) { }
  
  getdata():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`)
  }
}



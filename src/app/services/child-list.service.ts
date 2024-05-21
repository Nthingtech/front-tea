import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Child } from '../entities/Child';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChildListService {

  constructor(private http: HttpClient) {}

  public getChildList(): Observable<Child[]>{
    return this.http.get<Child[]>(environment.apiUrl+"/children/listChildren");
  }

  public createChild(child:Child): Observable<Child>{
    return this.http.post<Child>(environment.apiUrl+"/children/createChild", child);
  }
}



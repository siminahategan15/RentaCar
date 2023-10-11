import { Injectable } from '@angular/core';
import { IComponent } from '../models/component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor(private http: HttpClient) { }   
  getComponents(): Observable<IComponent[]>
  {
    return this.http.get<IComponent[]>('https://localhost:7074/components');
  }
  getComponent(id: number| undefined): Observable<IComponent>
  {
    return this.http.get<IComponent>('https://localhost:7074' + `/components/${id}`);
  }

  deleteComponent(id: number| undefined):any
  {
    return this.http.delete<any>('https://localhost:7074' + '/components/'+ id);
  }

  createComponent(component: IComponent | undefined):Observable<IComponent>
  {
    return this.http.post<IComponent>('https://localhost:7074/components', component);
  }

  updateComponent(id:number| undefined,component:IComponent | undefined): Observable<IComponent> {
    return this.http.put<IComponent>('https://localhost:7074'+`/components/${id}`,component);
}

}

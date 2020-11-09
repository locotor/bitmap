import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor(
    private http: HttpClient
  ) { }

  getDetailJson(url: string): Observable<any> {
    var reg = /rest(.+)/g;
    var href = url.match(reg);
    return this.http.get<any>(href[0]);
  }

  getDataSourceList(workspaceName: string): Observable<any> {
    return this.http.get(`rest/workspaces/${workspaceName}/datastores`);
  }
}

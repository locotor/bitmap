import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workspace } from 'core/types/workspaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkspacesService {

  constructor(
    private http: HttpClient
  ) { }

  getWorkspacesList(): Observable<any> {
    return this.http.get<Workspace[]>('rest/workspaces')
  }

}

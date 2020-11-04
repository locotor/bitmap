import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddWorkspaceFormData, AddWorkspaceParam, Workspace } from 'core/types/workspaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkspacesService {

  constructor(
    private http: HttpClient
  ) { }

  getWorkspaceList(): Observable<any> {
    return this.http.get<Workspace[]>('rest/workspaces');
  }

  addWorkspace(formData: AddWorkspaceFormData) {
    const param: AddWorkspaceParam = {
      workspace: {
        name: formData.name,
        connectionParameters: {
          entry: [{ '@key': 'url', $: formData.namespace }]
        }
      }
    };
    return this.http.post('rest/workspaces', param);
  }

}

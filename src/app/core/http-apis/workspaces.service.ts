import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddWorkspaceParam, Workspace } from 'core/types/workspaces';
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

  addWorkspace(formData) {
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

  deleteWorkspace(workspaceName: string) {
    return this.http.delete(`rest/workspaces/${workspaceName}`);
  }

  editWorkspace(workspaceName, formData) {
    const param: AddWorkspaceParam = {
      workspace: {
        name: formData.name,
      }
    };
    return this.http.put(`rest/workspaces/${workspaceName}`, param);
  }

}

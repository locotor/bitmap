import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayerManagementService {

  constructor(
    private http: HttpClient
  ) { }

  getLayerList(): Observable<any> {
    return this.http.get('rest/layers');
  }

  addLayerByShapfile(workspaceName: string, dataStoreName: string, featureType) {
    return this.http.post(
      `rest/workspaces/${workspaceName}/datastores/${dataStoreName}/featuretypes`,
      { featureType }
    );
  }

  deleteWorkspace(layerName: string) {
    return this.http.delete(`rest/layers/${layerName}`);
  }

}

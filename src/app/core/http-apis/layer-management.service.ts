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

  deleteWorkspace(layerName: string) {
    return this.http.delete(`rest/layers/${layerName}`);
  }

}

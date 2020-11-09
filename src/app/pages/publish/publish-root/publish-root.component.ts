import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'core/http-apis/data-source.service';
import { WorkspacesService } from 'core/http-apis/workspaces.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './publish-root.component.html',
  styleUrls: ['./publish-root.component.scss']
})
export class PublishRootComponent implements OnInit {
  currentStep = 0;
  formData = {
    workspace: '',
    dataStore: '',
    featureType: {
      name: "",
      title: "",
      abstract: "",
      keywords: {
        string: []
      },
      enabled: true,
      srs: "EPSG:4490",
      nativeBoundingBox: {
        "minx": 105.2897713647602,
        "maxx": 110.19555378960645,
        "miny": 28.163460419722746,
        "maxy": 32.20413263177634,
        "crs": "EPSG:4490"
      },
      latLonBoundingBox: {
        "minx": 105.2897713647602,
        "maxx": 110.19555378960645,
        "miny": 28.163460419722746,
        "maxy": 32.20413263177634,
        "crs": "EPSG:4490"
      }
    }
  }
  workspaceList$: Observable<any>;
  dataStoreList = [];

  constructor(
    private workspacesApi: WorkspacesService,
    private dataSourceApi: DataSourceService,
  ) { }

  ngOnInit(): void {
    this.workspaceList$ = this.workspacesApi.getWorkspaceList().pipe(
      map(data => data.workspaces.workspace)
    );
  }

  handleWorkspaceSelected(e) {
    this.getDataStoreList(e.value);
  }

  getDataStoreList(workspaceName: string) {
    this.dataStoreList = [];
    this.dataSourceApi.getDataSourceList(workspaceName).subscribe(resp => {
      if (!resp) { return; }
      this.dataStoreList = resp.dataStores.dataStore;
    });
  }

  pre(): void {
    this.currentStep -= 1;
  }

  next(): void {
    this.currentStep += 1;
  }

  publish(): void {
    console.log('done');
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataSourceService } from 'core/http-apis/data-source.service';
import { LayerManagementService } from 'core/http-apis/layer-management.service';
import { WorkspacesService } from 'core/http-apis/workspaces.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeatureAttributeFormDialogComponent } from './feature-attribute-form-dialog/feature-attribute-form-dialog.component';

@Component({
  templateUrl: './publish-root.component.html',
  styleUrls: ['./publish-root.component.scss']
})
export class PublishRootComponent implements OnInit {
  currentStep = 0;
  workspace = '';
  dataStore = '';
  formData = {
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
      },
      attributes: {
        attribute: []
      }
    }
  }
  workspaceList$: Observable<any>;
  dataStoreList = [];

  constructor(
    private workspacesApi: WorkspacesService,
    private dataSourceApi: DataSourceService,
    private LayerApi: LayerManagementService,
    private dialog: MatDialog
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

  openAttrCreateDialog() {
    const dialogRef = this.dialog.open(FeatureAttributeFormDialogComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) { return }
      this.formData.featureType.attributes.attribute.push(result);
    });
  }
  removeAttr(attr) {
    const index = this.formData.featureType.attributes.attribute.findIndex(a => a === attr);
    if (index >= 0) {
      this.formData.featureType.attributes.attribute.splice(index, 1);
    }
  }

  pre(): void {
    this.currentStep -= 1;
  }

  next(): void {
    this.currentStep += 1;
  }

  publish(): void {
    this.LayerApi.addLayerByShapfile(
      this.workspace,
      this.dataStore,
      this.formData.featureType
    ).subscribe(resp => {
      console.log(resp);
    });
  }

}

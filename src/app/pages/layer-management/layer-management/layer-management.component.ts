import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LayerManagementService } from 'core/http-apis/layer-management.service';
import { ConfirmDialogComponent } from 'shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  templateUrl: './layer-management.component.html',
  styleUrls: ['./layer-management.component.scss']
})
export class LayerManagementComponent implements OnInit {

  dataSource = [];

  constructor(
    private layerManagementApi: LayerManagementService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getLayerList();
  }

  getLayerList(): void {
    this.layerManagementApi.getLayerList().subscribe(data => {
      this.dataSource = data.layers.layer;
    });
  }

  openDeleteLayerConfirm(layer): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      data: {
        title: '删除确认',
        message: `是否要删除 ${layer.name} 服务`
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.layerManagementApi.deleteWorkspace(layer.name).subscribe(resp => {
        this.getLayerList();
      });
    });
  }

}

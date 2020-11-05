import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkspacesService } from 'core/http-apis/workspaces.service';
import { Workspace } from 'core/types/workspaces';
import { ConfirmDialogComponent } from 'shared/components/confirm-dialog/confirm-dialog.component';
import { AddWorkspaceDialogComponent } from './dialogs/add-workspace-dialog/add-workspace-dialog.component';

@Component({
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  dataSource: Workspace[] = [];

  constructor(
    private workspacesApi: WorkspacesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getWorkspacesList();
  }

  getWorkspacesList(): void {
    this.workspacesApi.getWorkspaceList().subscribe(data => {
      this.dataSource = data.workspaces.workspace;
    });
  }

  openAddWorkspaceDialog(): void {
    const dialogRef = this.dialog.open(AddWorkspaceDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.isAddSucceed) {
        this.getWorkspacesList();
      }
    });
  }

  openDeleteWorkspaceConfirm(workspace: Workspace): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      data: {
        title: '删除确认',
        message: `是否要删除 ${workspace.name} 工作区？`
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.workspacesApi.deleteWorkspace(workspace.name).subscribe(resp => {
          this.getWorkspacesList();
        });
      }
    });
  }

}

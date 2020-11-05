import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkspacesService } from 'core/http-apis/workspaces.service';
import { Workspace, WorkspaceFormDialogData } from 'core/types/workspaces';
import { ConfirmDialogComponent } from 'shared/components/confirm-dialog/confirm-dialog.component';
import { WorkspaceFormDialogComponent } from './dialogs/workspace-form-dialog/workspace-form-dialog.component';

@Component({
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  dataSource: Workspace[] = [];
  workspaceFormDialogData: WorkspaceFormDialogData = {
    mode: 'create',
    formData: {
      name: '',
      namespace: ''
    }
  };

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
    this.workspaceFormDialogData.mode = 'create';
    this.workspaceFormDialogData.formData = {
      name: '',
      namespace: ''
    };
    const dialogRef = this.dialog.open(WorkspaceFormDialogComponent, {
      width: '450px',
      data: this.workspaceFormDialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) { return }
      this.workspacesApi.addWorkspace(result).subscribe(resp => {
        this.getWorkspacesList();
      });
    });
  }

  openEditWorkspaceDialog(workspace: Workspace): void {
    this.workspaceFormDialogData.mode = 'edit';
    this.workspaceFormDialogData.formData = {
      name: workspace.name,
      namespace: '尚未完善'
    };
    const dialogRef = this.dialog.open(WorkspaceFormDialogComponent, {
      width: '450px',
      data: this.workspaceFormDialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) { return }
      this.workspacesApi.editWorkspace(result).subscribe(resp => {
        this.getWorkspacesList();
      })
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

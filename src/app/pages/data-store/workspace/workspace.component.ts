import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkspacesService } from 'core/http-apis/workspaces.service';
import { Workspace } from 'core/types/workspaces';
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
      if (result.isAddSucceed) {
        this.getWorkspacesList();
      }
    });
  }

}

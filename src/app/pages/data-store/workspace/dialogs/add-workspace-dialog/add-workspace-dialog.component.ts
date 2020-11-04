import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkspacesService } from 'core/http-apis/workspaces.service';
import { AddWorkspaceFormData } from 'core/types/workspaces';

@Component({
  templateUrl: './add-workspace-dialog.component.html',
  styleUrls: ['./add-workspace-dialog.component.scss']
})
export class AddWorkspaceDialogComponent implements OnInit {

  data: AddWorkspaceFormData = {
    name: '',
    namespace: ''
  };

  constructor(
    private dialogRef: MatDialogRef<AddWorkspaceDialogComponent>,
    private workspacesApi: WorkspacesService
  ) { }

  ngOnInit(): void {
  }

  addWorkspace(): void {
    this.workspacesApi.addWorkspace(this.data).subscribe(resp => {
      this.dialogRef.close({ isAddSucceed: true });
    });
  }

}

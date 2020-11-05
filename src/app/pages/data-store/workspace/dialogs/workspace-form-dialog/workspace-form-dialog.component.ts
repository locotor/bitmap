import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkspaceFormDialogData } from 'core/types/workspaces';

@Component({
  templateUrl: './workspace-form-dialog.component.html',
  styleUrls: ['./workspace-form-dialog.component.scss']
})
export class WorkspaceFormDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<WorkspaceFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WorkspaceFormDialogData
  ) { }

  ngOnInit(): void {
  }

  addWorkspace(): void {
    this.dialogRef.close(this.data.formData);
  }

}

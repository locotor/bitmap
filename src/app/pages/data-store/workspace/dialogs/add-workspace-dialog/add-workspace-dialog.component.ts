import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './add-workspace-dialog.component.html',
  styleUrls: ['./add-workspace-dialog.component.scss']
})
export class AddWorkspaceDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddWorkspaceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './feature-attribute-form-dialog.component.html',
  styleUrls: ['./feature-attribute-form-dialog.component.scss']
})
export class FeatureAttributeFormDialogComponent implements OnInit {

  formData = {
    name: '',
    nillable: true,
    binding: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}

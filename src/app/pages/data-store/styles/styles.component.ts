import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss']
})
export class StylesComponent implements OnInit {

  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface WorkspaceElement {
  name: string;
  type: string;
  isDefault: boolean;
  symbol: string;
}

const ELEMENT_DATA: WorkspaceElement[] = [
  { type: 'ArcGrid', name: 'Hydrogen', isDefault: true, symbol: 'H' },
  { type: 'ArcGrid', name: 'Helium', isDefault: false, symbol: 'He' },
  { type: 'ArcGrid', name: 'Lithium', isDefault: false, symbol: 'Li' },
  { type: 'ArcGrid', name: 'Beryllium', isDefault: false, symbol: 'Be' },
  { type: 'ArcGrid', name: 'Boron', isDefault: false, symbol: 'B' },
  { type: 'ArcGrid', name: 'Carbon', isDefault: false, symbol: 'C' },
  { type: 'ArcGrid', name: 'Nitrogen', isDefault: false, symbol: 'N' },
  { type: 'ArcGrid', name: 'Oxygen', isDefault: false, symbol: 'O' },
  { type: 'ArcGrid', name: 'Fluorine', isDefault: false, symbol: 'F' },
  { type: 'ArcGrid', name: 'Neon', isDefault: false, symbol: 'Ne' },
  { type: 'ArcGrid', name: 'Sodium', isDefault: false, symbol: 'Na' },
  { type: 'ArcGrid', name: 'Magnesium', isDefault: false, symbol: 'Mg' },
  { type: 'ArcGrid', name: 'Aluminum', isDefault: false, symbol: 'Al' },
  { type: 'ArcGrid', name: 'Silicon', isDefault: false, symbol: 'Si' },
  { type: 'ArcGrid', name: 'Phosphorus', isDefault: false, symbol: 'P' },
  { type: 'ArcGrid', name: 'Sulfur', isDefault: false, symbol: 'S' },
  { type: 'ArcGrid', name: 'Chlorine', isDefault: false, symbol: 'Cl' },
  { type: 'ArcGrid', name: 'Argon', isDefault: false, symbol: 'Ar' },
  { type: 'ArcGrid', name: 'Potassium', isDefault: false, symbol: 'K' },
  { type: 'ArcGrid', name: 'Calcium', isDefault: false, symbol: 'Ca' },
];

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements AfterViewInit {

  dataSource = ELEMENT_DATA;

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

}

export interface WorkspaceElement {
  name: string;
  position: number;
  isDefault: boolean;
  symbol: string;
}

const ELEMENT_DATA: WorkspaceElement[] = [
  { position: 1, name: 'Hydrogen', isDefault: true, symbol: 'H' },
  { position: 2, name: 'Helium', isDefault: false, symbol: 'He' },
  { position: 3, name: 'Lithium', isDefault: false, symbol: 'Li' },
  { position: 4, name: 'Beryllium', isDefault: false, symbol: 'Be' },
  { position: 5, name: 'Boron', isDefault: false, symbol: 'B' },
  { position: 6, name: 'Carbon', isDefault: false, symbol: 'C' },
  { position: 7, name: 'Nitrogen', isDefault: false, symbol: 'N' },
  { position: 8, name: 'Oxygen', isDefault: false, symbol: 'O' },
  { position: 9, name: 'Fluorine', isDefault: false, symbol: 'F' },
  { position: 10, name: 'Neon', isDefault: false, symbol: 'Ne' },
  { position: 11, name: 'Sodium', isDefault: false, symbol: 'Na' },
  { position: 12, name: 'Magnesium', isDefault: false, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', isDefault: false, symbol: 'Al' },
  { position: 14, name: 'Silicon', isDefault: false, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', isDefault: false, symbol: 'P' },
  { position: 16, name: 'Sulfur', isDefault: false, symbol: 'S' },
  { position: 17, name: 'Chlorine', isDefault: false, symbol: 'Cl' },
  { position: 18, name: 'Argon', isDefault: false, symbol: 'Ar' },
  { position: 19, name: 'Potassium', isDefault: false, symbol: 'K' },
  { position: 20, name: 'Calcium', isDefault: false, symbol: 'Ca' },
];

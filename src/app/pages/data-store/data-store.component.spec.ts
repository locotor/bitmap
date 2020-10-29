import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStoreComponent } from './workspace.component';

describe('DataStoreComponent', () => {
  let component: DataStoreComponent;
  let fixture: ComponentFixture<DataStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

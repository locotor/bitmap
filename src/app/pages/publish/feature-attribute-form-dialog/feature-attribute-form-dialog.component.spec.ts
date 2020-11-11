import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAttributeFormDialogComponent } from './feature-attribute-form-dialog.component';

describe('FeatureAttributeFormDialogComponent', () => {
  let component: FeatureAttributeFormDialogComponent;
  let fixture: ComponentFixture<FeatureAttributeFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureAttributeFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAttributeFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

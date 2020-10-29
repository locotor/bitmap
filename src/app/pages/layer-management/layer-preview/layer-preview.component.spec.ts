import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerPreviewComponent } from './layer-preview.component';

describe('LayerPreviewComponent', () => {
  let component: LayerPreviewComponent;
  let fixture: ComponentFixture<LayerPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayerPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

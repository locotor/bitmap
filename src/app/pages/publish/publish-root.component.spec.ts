import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishRootComponent } from './publish-root.component';

describe('PublishRootComponent', () => {
  let component: PublishRootComponent;
  let fixture: ComponentFixture<PublishRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

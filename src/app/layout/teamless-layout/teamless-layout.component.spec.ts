import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamlessLayoutComponent } from './teamless-layout.component';

describe('TeamlessLayoutComponent', () => {
  let component: TeamlessLayoutComponent;
  let fixture: ComponentFixture<TeamlessLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamlessLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamlessLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

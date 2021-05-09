import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDemoTableComponent } from './angular-demo-table.component';

describe('AngularDemoTableComponent', () => {
  let component: AngularDemoTableComponent;
  let fixture: ComponentFixture<AngularDemoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDemoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDemoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

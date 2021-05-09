import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDemoTableComponent } from './bootstrap-demo-table.component';

describe('BootstrapDemoComponent', () => {
  let component: BootstrapDemoTableComponent;
  let fixture: ComponentFixture<BootstrapDemoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapDemoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapDemoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

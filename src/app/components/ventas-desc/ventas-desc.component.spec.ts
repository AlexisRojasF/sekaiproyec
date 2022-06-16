import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasDescComponent } from './ventas-desc.component';

describe('VentasDescComponent', () => {
  let component: VentasDescComponent;
  let fixture: ComponentFixture<VentasDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

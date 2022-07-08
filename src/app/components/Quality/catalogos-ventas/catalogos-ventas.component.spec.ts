import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogosVentasComponent } from './catalogos-ventas.component';

describe('CatalogosVentasComponent', () => {
  let component: CatalogosVentasComponent;
  let fixture: ComponentFixture<CatalogosVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogosVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogosVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

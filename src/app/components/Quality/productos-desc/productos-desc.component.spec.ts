import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosDescComponent } from './productos-desc.component';

describe('ProductosDescComponent', () => {
  let component: ProductosDescComponent;
  let fixture: ComponentFixture<ProductosDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

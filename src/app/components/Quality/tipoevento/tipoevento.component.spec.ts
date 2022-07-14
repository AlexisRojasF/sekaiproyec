import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoeventoComponent } from './tipoevento.component';

describe('TipoeventoComponent', () => {
  let component: TipoeventoComponent;
  let fixture: ComponentFixture<TipoeventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoeventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

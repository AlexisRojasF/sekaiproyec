import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivosComponent } from './festivos.component';

describe('FestivosComponent', () => {
  let component: FestivosComponent;
  let fixture: ComponentFixture<FestivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

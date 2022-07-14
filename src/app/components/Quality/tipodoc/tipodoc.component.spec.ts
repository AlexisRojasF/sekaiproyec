import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodocComponent } from './tipodoc.component';

describe('TipodocComponent', () => {
  let component: TipodocComponent;
  let fixture: ComponentFixture<TipodocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipodocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminarFlujoComponent } from './terminar-flujo.component';

describe('TerminarFlujoComponent', () => {
  let component: TerminarFlujoComponent;
  let fixture: ComponentFixture<TerminarFlujoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminarFlujoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminarFlujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

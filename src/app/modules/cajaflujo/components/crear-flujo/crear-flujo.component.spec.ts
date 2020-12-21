import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFlujoComponent } from './crear-flujo.component';

describe('CrearFlujoComponent', () => {
  let component: CrearFlujoComponent;
  let fixture: ComponentFixture<CrearFlujoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFlujoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFlujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

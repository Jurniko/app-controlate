import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMComponent } from './input-m.component';

describe('InputMComponent', () => {
  let component: InputMComponent;
  let fixture: ComponentFixture<InputMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaflujoComponent } from './cajaflujo.component';

describe('CajaflujoComponent', () => {
  let component: CajaflujoComponent;
  let fixture: ComponentFixture<CajaflujoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajaflujoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaflujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

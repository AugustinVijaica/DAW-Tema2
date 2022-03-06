import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InchirieriComponent } from './inchirieri.component';

describe('InchirieriComponent', () => {
  let component: InchirieriComponent;
  let fixture: ComponentFixture<InchirieriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InchirieriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InchirieriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

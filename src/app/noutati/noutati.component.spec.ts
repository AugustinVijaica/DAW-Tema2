import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoutatiComponent } from './noutati.component';

describe('NoutatiComponent', () => {
  let component: NoutatiComponent;
  let fixture: ComponentFixture<NoutatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoutatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoutatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

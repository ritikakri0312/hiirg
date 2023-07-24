import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RattingComponent } from './ratting.component';

describe('RattingComponent', () => {
  let component: RattingComponent;
  let fixture: ComponentFixture<RattingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RattingComponent]
    });
    fixture = TestBed.createComponent(RattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

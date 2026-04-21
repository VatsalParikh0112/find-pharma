import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandIcon } from './hand-icon';

describe('HandIcon', () => {
  let component: HandIcon;
  let fixture: ComponentFixture<HandIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(HandIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

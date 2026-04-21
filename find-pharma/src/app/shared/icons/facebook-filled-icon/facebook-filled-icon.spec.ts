import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookFilledIcon } from './facebook-filled-icon';

describe('FacebookFilledIcon', () => {
  let component: FacebookFilledIcon;
  let fixture: ComponentFixture<FacebookFilledIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacebookFilledIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(FacebookFilledIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

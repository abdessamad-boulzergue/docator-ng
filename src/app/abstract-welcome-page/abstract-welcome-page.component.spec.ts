import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractWelcomePageComponent } from './abstract-welcome-page.component';

describe('AbstractWelcomePageComponent', () => {
  let component: AbstractWelcomePageComponent;
  let fixture: ComponentFixture<AbstractWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractWelcomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

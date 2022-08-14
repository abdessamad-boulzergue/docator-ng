import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvForestComponent } from './cv-forest.component';

describe('CvForestComponent', () => {
  let component: CvForestComponent;
  let fixture: ComponentFixture<CvForestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvForestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

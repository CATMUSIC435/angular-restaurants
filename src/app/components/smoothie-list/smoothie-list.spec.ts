import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothieList } from './smoothie-list';

describe('SmoothieList', () => {
  let component: SmoothieList;
  let fixture: ComponentFixture<SmoothieList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmoothieList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmoothieList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

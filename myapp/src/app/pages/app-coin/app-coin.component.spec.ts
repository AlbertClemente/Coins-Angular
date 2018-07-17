import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCoinComponent } from './app-coin.component';

describe('AppCoinComponent', () => {
  let component: AppCoinComponent;
  let fixture: ComponentFixture<AppCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

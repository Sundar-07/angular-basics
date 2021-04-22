import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmasterComponent } from './viewmaster.component';

describe('ViewmasterComponent', () => {
  let component: ViewmasterComponent;
  let fixture: ComponentFixture<ViewmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

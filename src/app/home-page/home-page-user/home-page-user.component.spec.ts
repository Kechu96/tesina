import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageUserComponent } from './home-page-user.component';

describe('HomePageUserComponent', () => {
  let component: HomePageUserComponent;
  let fixture: ComponentFixture<HomePageUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

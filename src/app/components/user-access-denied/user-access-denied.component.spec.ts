import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccessDeniedComponent } from './user-access-denied.component';

describe('UserAccessDeniedComponent', () => {
  let component: UserAccessDeniedComponent;
  let fixture: ComponentFixture<UserAccessDeniedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccessDeniedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccessDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

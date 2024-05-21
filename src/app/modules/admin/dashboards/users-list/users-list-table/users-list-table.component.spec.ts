import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListTableComponent } from './users-list-table.component';

describe('UsersListTableComponent', () => {
  let component: UsersListTableComponent;
  let fixture: ComponentFixture<UsersListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

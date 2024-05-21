import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from 'app/shared/modules/forms.module';
import { UsersListComponent } from './users-list.component';
import { UserListRoutes } from './users-list.routing';
import { UsersListTableComponent } from './users-list-table/users-list-table.component';
import { NewUserRegisterComponent } from './new-user-register/new-user-register.component';
import { MaterialUiModule } from 'app/shared/modules/material-ui.module';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersListTableComponent,
    NewUserRegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserListRoutes),
    MaterialUiModule,
    TranslocoModule,
    SharedModule,
  ]
})
export class UsersListModule { }

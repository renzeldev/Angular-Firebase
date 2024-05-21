import { Route } from '@angular/router';
import { UsersListComponent } from './users-list.component';
// import { ProjectResolver } from 'app/modules/admin/dashboards/project/project.resolvers';

export const UserListRoutes: Route[] = [
    {
        path     : '',
        component: UsersListComponent,
        // resolve  : {
        //     data: ProjectResolver
        // }
    }
];

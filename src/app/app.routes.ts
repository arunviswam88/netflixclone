import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>  import ('../components/login/login.component').then(login => login.LoginComponent)     
    },
    {
        path: 'browse',
        loadComponent: () =>  import ('../components/browse/browse.component').then(browse => browse.BrowseComponent)     
    }
];

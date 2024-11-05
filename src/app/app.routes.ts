import { Routes } from '@angular/router';
import { DetailPageComponent } from './pages/detail/detail.component';
import { HomePageComponent } from './pages/home/home.component';

export const routes: Routes = [
    { component: HomePageComponent, path: '' },
    { component: DetailPageComponent, path: 'detail/:content' }
];

import { Routes } from '@angular/router';
import { commonRoutes } from './routes/common/common.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'common', pathMatch: 'full' },
  {
    path: 'common',
    children: commonRoutes,
  },
];
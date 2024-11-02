import { Routes } from '@angular/router';
import { RemoteComponent } from './remote/remote.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mfe2-remote-app',
    pathMatch: 'full'
},
{
    path: 'remote',
    component: RemoteComponent
}
];

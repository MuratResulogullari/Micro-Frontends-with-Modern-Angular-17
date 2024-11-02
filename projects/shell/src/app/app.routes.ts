import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [

  {
    path: 'mfe1-remote-app',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
      loadRemoteModule('mfe1', './routes').then((m) => m.routes),
  },
  {
    path: 'mfe2-remote-app',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
      loadRemoteModule('mfe2', './routes').then((m) => m.routes),
  },
];

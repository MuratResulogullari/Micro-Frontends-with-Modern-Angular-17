import { Routes } from '@angular/router';
import { RemoteComponent } from './remote/remote.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: 'mfe1-remote-app',
      pathMatch: 'full'
  },
  {
      path: 'remote',
      component: RemoteComponent
  }
];

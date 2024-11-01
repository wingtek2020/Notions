import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { NotFoundComponent } from './component/company-pages/not-found/not-found.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { Routes } from '@angular/router';
import { AdminGuard } from './shared/auth-guard/auth.guard';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { FullComponent } from './shared/components/layout/full/full.component';
import { fullRoutes } from './shared/routes/full-routes';
import { contentRoutes } from './shared/routes/routes';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'news-feed-layout/style-1',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    component: AuthLoginComponent,  
  },
  {
    path: '',
    component: ContentComponent,
    children: contentRoutes,
    canActivate: [AdminGuard],
  },
  {
    path: '',
    component: FullComponent,
    children: fullRoutes,
    canActivate: [AdminGuard],

  },
  { path: 'errors',
    component: TestErrorsComponent,
  },
  { path: 'not-found',
    component: NotFoundComponent,
  },
  { path: 'server-error',
    component: ServerErrorComponent,
  },
  { path: '**', redirectTo: 'company/404' }

];

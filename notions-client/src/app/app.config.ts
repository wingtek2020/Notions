import { errorInterceptor } from './_interceptors/error.interceptor';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { provideHttpClient, withInterceptors} from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { routes } from './app.routes';
import { FlatpickrModule } from 'angularx-flatpickr';
import { AuthConfig, OAuthModule } from 'angular-oauth2-oidc';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideHttpClient(withInterceptors([errorInterceptor])),
  
  provideAnimations(),
  provideToastr({
    positionClass: 'toast-bottom-right'
  }),
  importProvidersFrom(
    OAuthModule.forRoot(),
    FlatpickrModule.forRoot({}),
    CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory
  }))
  ],
};

export const authConfig: AuthConfig = {
  issuer: 'https://ravelry/oauth2/auth', // Replace with your provider's URL
  clientId: '1d0990baad92d8732b6db9aac2e44dee',
  redirectUri: window.location.origin,
  scope: 'openid profile email', // Adjust scopes as needed
};



import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Injectable({
  providedIn: 'root',
})
export class AuthRavelryService {
  private oAuthService = inject(OAuthService);
  private router = inject(Router);
  profile = signal<any>(null);

  constructor() {
    this.initConfiguration();
  }

  initConfiguration() {
    //this.oAuthService.configure(authConfig);
    this.oAuthService.loginUrl = "https://ravelry.com/oauth2/auth"; //Id-Provider?
    this.oAuthService.tokenEndpoint = "https://ravelry.com/oauth2/token"
    this.oAuthService.clientId = '67b0a8d303061eca2290e97cda2d189d';
    this.oAuthService.redirectUri ='https://localhost:4200' + '/auth/login';
    console.log(this.oAuthService.redirectUri);
    this.oAuthService.oidc = false;
    this.oAuthService.scope = "offline";
    this.oAuthService.showDebugInformation = true;
    this.oAuthService.requestAccessToken = true;
    this.oAuthService.strictDiscoveryDocumentValidation = false,
    //this.oAuthService.setupAutomaticSilentRefresh();

    this.oAuthService.tryLogin().then(() => {
      if (this.oAuthService.hasValidIdToken()) {
        this.profile.set(this.oAuthService.getIdentityClaims());
        console.log('here' + this.oAuthService.getAccessToken());
      }
      //console.log(this.oAuthService.getIdentityClaims());
      console.log('====================================');
      console.log('claims: ' + this.oAuthService.getIdentityClaims());
      this.profile.set(this.oAuthService.getAccessToken());
      console.log('====================================');
    });
  }

  login() {
    this.oAuthService.initImplicitFlow();

  }

  logout() {
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
    this.profile.set(null);
  }

  getProfile() {
    return this.profile();
  }
}

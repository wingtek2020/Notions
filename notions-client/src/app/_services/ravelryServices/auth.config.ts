import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://ravelry.com/oauth2',
  strictDiscoveryDocumentValidation: false,
  clientId: '69d7f7210e712f794e2e4dcfa8214265',
  redirectUri: window.location.origin + '/auth/login',
  scope: '',
};

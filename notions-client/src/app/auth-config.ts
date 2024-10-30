import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://www.ravelry.com/oauth2/auth/',
    redirectUri: 'https://localhost:4200/',
    clientId: '69d7f7210e712f794e2e4dcfa8214265',
    scope: 'patternstore-read',
    responseType: 'code',
    showDebugInformation: true,
};
import { Inspiration } from './../_models/user.ts/inspiration';
import { setting } from './../shared/interface/setting-box';
import { RavelryPattern, Pattern } from './../_models/ravelryPattern';
import { Member } from './../_models/member';
import { environment } from './../../environments/environment';
import { Injectable, inject, signal } from "@angular/core";

import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import * as base64 from 'js-base64';

import { catchError, of } from 'rxjs';

import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RavelryService {
  baseRavelryUrl = environment.ravelryApiUrl;
  private http = inject(HttpClient);
  private oAuthService = inject(OAuthService);  
  profile = signal<any>(null);
  
  inspirations: Inspiration[] = [];
 
  constructor() {
    this.initConfiguration();
  }

  getPatternsSearch() {
    console.log('profile ', this.oAuthService.getAccessToken());
    const headers = { 'Authorization': 'Bearer ' + this.oAuthService.getAccessToken()};
    /*
    return this.http.get<RavelryPattern>('https://api.ravelry.com/patterns/5000.json', { headers })
        .subscribe(data => {
          this.patterns = data;
          console.log(data);
        })
          */
        this.http.get<any>('https://api.ravelry.com/patterns/search.json?q=free, scarf', { headers })
        .subscribe(data => {

          console.log(data);
        });
    return this.http.get<any>('https://api.ravelry.com/patterns/search.json?q=free, scarf', { headers });

  }

  getPatterns() {
    
    //const encodedCredentials = base64.encode(`${environment.ravUsername}:${environment.ravPassword}`);
    //this.getRavToken();
    this.initConfiguration();
    if (this.oAuthService.getAccessToken().length < 9)
      this.getRavToken();
    console.log('creds', this.oAuthService.getAccessToken());
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.oAuthService.getAccessToken()}`);   

    return this.http.get<any>('https://api.ravelry.com/patterns/search.json?q=free', 
       { headers: headers })
       .pipe(
        catchError(error => {
          console.error('Error occurred:', 'test');
          this.getRavToken();
          // Return an empty observable or handle the error appropriately
          return of([]);
        })
      );

      
  } 
  getRavToken(){
    this.oAuthService.initImplicitFlow();
  }

  getInspirations(){

    this.getPatterns()
    .subscribe(data => {
      for(let i=0;i<data.patterns.length ;i++){  //How to properly iterate here!!
       
        const inspiration = { id: i, url: data.patterns[i].first_photo.square_url, name: data.patterns[i].name };
            this.inspirations.push(inspiration);

      }
      return this.inspirations;
    });
  }
 

  initConfiguration() {
    //this.oAuthService.configure(authConfig);
    this.oAuthService.loginUrl = "https://ravelry.com/oauth2/auth"; //Id-Provider?
    this.oAuthService.tokenEndpoint = "https://ravelry.com/oauth2/token"
    this.oAuthService.clientId = '67b0a8d303061eca2290e97cda2d189d';
    this.oAuthService.redirectUri ='https://localhost:4200' + '/favorite/page-home';
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
      
      console.log('====================================');
      console.log(this.oAuthService.getAccessToken());
      this.profile.set(this.oAuthService.getAccessToken());
      console.log('====================================');
    });
  }
}

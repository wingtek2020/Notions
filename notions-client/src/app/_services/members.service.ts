import { Member } from './../_models/member';
import { AccountService } from './account.service';
import { environment } from './../../environments/environment';
import { User } from "./../_models/user.ts/user.ts.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";

import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MemberService {
  baseUrl = environment.apiUrl;
  private http = inject(HttpClient);
  private accountService = inject(AccountService);
  members : Member[] = [];

  getMembers() {
    console.log(this.baseUrl + "users");
    this.http.get<Member[]>(this.baseUrl + "users").subscribe(data => {
      this.members = data;
      console.log('members', this.members);
      return this.members;
    });
    return this.http.get<Member[]>(this.baseUrl + "users");
  }

  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + "users/" + username);
  }
  getHttpOptions(){
    console.log('token', this.accountService.currentUser());

    return{
        headers : new HttpHeaders({
        Authorization: `bearer ${this.accountService.currentUser()?.token}`

    } )
  }
}
}

import { User } from "./../_models/user.ts/user.ts.component";
import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";

import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  baseUrl = "https://localhost:5001/api/";
  currentUser = signal<User | null>(null);
  currentUsername : string;
  private http = inject(HttpClient);

  login(model: any) {
    return this.http.post<User>(this.baseUrl + "account/login", model).pipe(
      map((user) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUser.set(user);
          this.currentUsername = user.username;
        }
      })
    );
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + "account/register", model).pipe(
      map((user) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUsername = user.username;
          this.currentUser.set(user);
        }
        return user;
      })
    );
  }

  registerwithRavelry() {
/*
    const ravAuth: RavelryAuth = {
      client_id: "69d7f7210e712f794e2e4dcfa8214265",
      client_secret: "lLyvDNbjb/190o23ktU8qpzv9ypy7OBaJN9eIg7u",
      redirect_uri: "www.google.com"
    };

    console.log('reg');
    return this.http.post(this.baseUrl + "https://www.ravelry.com/oauth2/auth", ravAuth).pipe(
      map((returnData) => {
        if (returnData) {
         console.log(returnData);
        }
        return;
      })
    );
    */
  }
}

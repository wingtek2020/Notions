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
}

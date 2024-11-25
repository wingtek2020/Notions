import { Photo } from './../_models/photo';
import { Member } from './../_models/member';
import { AccountService } from './account.service';
import { environment } from './../../environments/environment';
import { User } from "./../_models/user.ts/user.ts.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { map, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MemberService {
  baseUrl = environment.apiUrl;
  private http = inject(HttpClient);
  private accountService = inject(AccountService);
  members = signal<Member[]>([]);

  getMembers() {
      return this.http.get<Member[]>(this.baseUrl + "users").subscribe({
      next: members =>{
        this.members.set(members)
      } 
    })
  }

  getMember(username: string) {
    const member = this.members().find(x => x.username === username);
    if (member !== undefined) return of(member);     
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

 updateMember(member: Member){

    return this.http.put(this.baseUrl + 'users', member).pipe(
      tap(() => {
          this.members.update(members => 
            members.map(m => m.username === member.username ?
            member : m))
      })
      )
  }

  setMainPhoto(photo: Photo) {
    return this.http.put(this.baseUrl + 'users/set-main-photo/' + photo.id, {});
    //.pipe(
      // tap(() => {
      //   this.members.update(members => members.map(m => {
      //     if (m.photos.includes(photo)) {
      //       m.photoUrl = photo.url
      //     }
      //     return m;
      //   }))
      // })
   // )
  }

  deletePhoto(photo: Photo) {
    return this.http.delete(this.baseUrl + 'users/delete-photo/' + photo.id).pipe(
      // tap(() => {
      //   this.members.update(members => members.map(m => {
      //     if (m.photos.includes(photo)) {
      //       m.photos = m.photos.filter(x => x.id !== photo.id)
      //     }
      //     return m
      //   }))
      // })
    )
  }
}


import { Photo } from './../../../../_models/photo';
import { FileUploadModule, FileUploader } from "ng2-file-upload";
import { environment } from "./../../../../../environments/environment";
import { gallery } from "./../../../../shared/interface/single-page";
import { Member } from "./../../../../_models/member";
import { AccountService } from "./../../../../_services/account.service";
import { MemberService } from "./../../../../_services/members.service";
import { CommonModule, NgFor, NgStyle, NgIf, NgClass, DecimalPipe } from "@angular/common";
import { Component, inject, OnInit, EventEmitter} from "@angular/core";
import { AlbumComponent } from "./album/album.component";
import { GalleryPhotosComponent } from "./gallery-photos/gallery-photos.component";

import {
  GalleryModule,
  GalleryItem,
  ImageItem,
  VideoItem,
  YoutubeItem,
  IframeItem,
} from "ng-gallery";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrl: "./photos.component.scss",
  imports: [FileUploadModule, NgStyle, NgClass, NgIf, NgFor, DecimalPipe],
  standalone: true,
})
export class PhotosComponent implements OnInit {
  public openTab: string = "album";

  changeTab(val: string) {
    this.openTab = val;
  }

  member?: Member;
  private accountService = inject(AccountService);
  user = this.accountService.currentUser();
  private memberService = inject(MemberService);
  images: GalleryItem[] = [];

  uploader?: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;

  ngOnInit(): void {
    this.loadMember();
    this.initializeUploader();
  }

  fileOverBase(e: any) {
    this.hasBaseDropZoneOver = e;
  }

  setMainPhoto(photo: Photo){
    this.memberService.setMainPhoto(photo).subscribe({
      next: _ =>{
        const user = this.accountService.currentUser();
        if (user){
          user.photoUrl = photo.url;
          this.accountService.setCurrentUser(user);
        }
        const updatedMember = this.member;
        updatedMember.photoUrl = photo.url;
        updatedMember.photos.forEach(p => {
          if (p.isMain) p.isMain = false;
          if (p.id === photo.id) p.isMain = true;
        })
       this.onMemberChange(updatedMember); 
      }
    })
  }

  deletePhoto(photo: Photo) {
    this.memberService.deletePhoto(photo).subscribe({
      next: _ => {
        const updatedMember = this.member;
        updatedMember.photos = updatedMember.photos.filter(x => x.id !== photo.id);
        this.onMemberChange(updatedMember);
      }
    })
  }

  loadMember() {
    if (!this.user) return;
    this.memberService.getMember(this.user.username).subscribe({
      next: (member) => {
        this.member = member;
        member.photos.map((p) => {
          this.images.push(
            new ImageItem({
              src: p.url,
              thumb: p.url,
            })
          );
        });
        console.log("images ", this.images.length);
      },
    });
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + "users/add-photo",
      authToken: "Bearer " + this.accountService.currentUser()?.token,
      isHTML5: true,
      allowedFileType: ["image"],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024,
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      const photo = JSON.parse(response);
      const updatedMember = this.member;
      updatedMember.photos.push(photo);
    };
  }

  onMemberChange(event: Member){
    this.member = event;
  }
}

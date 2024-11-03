import { images } from './../../../shared/interface/common';
import { Member } from './../../../_models/member';

import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from './../../../_services/members.service';
import { Component, OnInit, inject } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { GalleryModule, GalleryItem, ImageItem, VideoItem, YoutubeItem, IframeItem } from 'ng-gallery';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports:  [TabsModule, GalleryModule],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent implements OnInit {
  private memberService = inject(MemberService);
  private route = inject(ActivatedRoute);
  member?: Member;  
  images: GalleryItem[] = [];

 constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const username = this.route.snapshot.paramMap.get('username');
    if(!username) return;
    this.memberService.getMember(username).subscribe({
      next: member => {
        this.member = member;
        member.photos.map(p => {
          this.images.push(new ImageItem({
            src: p.url,
            thumb: p.url
          }))
        })
        console.log('images ', this.images.length);

  }
  })
}
}

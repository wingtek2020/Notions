import { Member } from './../../../_models/member';
import { MemberService } from './../../../_services/members.service';
import { Component, Input, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AboutIntroMySelfComponent } from '../../../shared/components/common/about-intro-my-self/about-intro-my-self.component';
import { HobbiesInterestComponent } from '../../../shared/components/common/hobbies-interest/hobbies-interest.component';
import { MenuComponent } from '../tab/menu/menu.component';
import { AboutFriendListComponent } from '../widgets/about-friend-list/about-friend-list.component';
import { ProfileMenuComponent } from '../widgets/profile-menu/profile-menu.component';
import { ProfilePagesComponent } from '../widgets/profile-pages/profile-pages.component';
import { MemberDetailComponent } from './../../member-pages/member-detail/member-detail.component';

import { CommonService } from '../../../shared/services/common.service';

import { educationWork, hobbyInterests, introMySelfAbout } from '../../../shared/data/profile-pages/about';
import { ProfileAboutSkeletonComponent } from '../../../shared/skeleton-loader/profile-pages-skeleton/profile-about-skeleton/profile-about-skeleton.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ProfilePagesComponent, ProfileMenuComponent, AboutIntroMySelfComponent, ProfileAboutSkeletonComponent,
    HobbiesInterestComponent, AboutFriendListComponent, MenuComponent, MemberDetailComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent implements OnInit {

  public introMySelfAbout = introMySelfAbout;
  public hobbyInterest = hobbyInterests;
  public educationWork = educationWork;
  @Input() currentUrl: string;


  private memberService = inject(MemberService);
  private route = inject(ActivatedRoute);
  member?: Member;

  constructor(public commonServices: CommonService,private router: Router) {
    this.currentUrl = this.router.url;
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const username = this.route.snapshot.paramMap.get('username');
    if(!username) return;
    this.memberService.getMember(username).subscribe({
      next: member => this.member = member
    })
  }
}

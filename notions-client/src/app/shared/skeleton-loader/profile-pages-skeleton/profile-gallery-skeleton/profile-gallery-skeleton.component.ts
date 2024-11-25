import { MemberService } from './../../../../_services/members.service';
import { AccountService } from './../../../../_services/account.service';
import { Member } from './../../../../_models/member';
import { Component, input, OnInit, inject } from '@angular/core';
import { HeaderOneSkeletonComponent } from '../../widgets/header/header-one-skeleton/header-one-skeleton.component';
import { SidebarOneSkeletonComponent } from '../../widgets/sidebar/sidebar-one-skeleton/sidebar-one-skeleton.component';

@Component({
  selector: 'app-profile-gallery-skeleton',
  standalone: true,
  imports: [HeaderOneSkeletonComponent],
  templateUrl: './profile-gallery-skeleton.component.html',
  styleUrl: './profile-gallery-skeleton.component.scss'
})
export class ProfileGallerySkeletonComponent implements OnInit {
  member? : Member;
  private accountService = inject(AccountService);
  private memberService = inject(MemberService);

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(){
    const user= this.accountService.currentUser();
    if (!user) return;
    this.memberService.getMember(user.username).subscribe({
      next: member => this.member = member
    })
  }

}

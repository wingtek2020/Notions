import { Member } from './../../../../_models/member';
import { MemberService } from './../../../../_services/members.service';
import { inject, OnInit } from '@angular/core';
import { AccountService } from './../../../../_services/account.service';
import { Component, Input, Injector } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { FeatherIconComponent } from '../feather-icon/feather-icon.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { EditProfileComponent } from '../../../../component/profile-pages/widgets/model/edit-profile/edit-profile.component';

import { introMySelf, introMySelfFooter } from '../../../data/profile-pages/time-line';

@Component({
  selector: 'app-about-intro-my-self',
  standalone: true,
  imports: [FeatherIconComponent ,SvgIconComponent],
  templateUrl: './about-intro-my-self.component.html',
  styleUrl: './about-intro-my-self.component.scss'
})

export class AboutIntroMySelfComponent implements OnInit {

  member? : Member;
  private accountService = inject(AccountService);
  private memberService = inject(MemberService);
  @Input() introMySelf :introMySelf[];

  public introMySelfFooter = introMySelfFooter ;

  modalRef: any;

  constructor(public modalServices :NgbModal){}
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
  editProfile(){
     this.modalRef = this.modalServices.open(EditProfileComponent, {size:'lg'})
     this.modalRef.componentInstance.member = this.member;
         
  }

}

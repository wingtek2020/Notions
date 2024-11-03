import { DownloadComponent } from './../../widgets/download/download.component';
import { FooterComponent } from './../../widgets/footer/footer.component';
import { LoadingComponent } from './../../../shared/skeleton-loader/widgets/loading/loading.component';
import { TitleSectionComponent } from './../../widgets/title-section/title-section.component';
import { HeaderComponent } from './../../../shared/components/common/header/header.component';
import { Member } from './../../../_models/member';
import { MemberService } from './../../../_services/members.service';
import { Component, OnInit, inject } from '@angular/core';
import { MemberCardComponent } from "../member-card/member-card.component";

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MemberCardComponent, HeaderComponent, TitleSectionComponent, LoadingComponent, FooterComponent, DownloadComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.scss'
})
export class MemberListComponent implements OnInit {
  private memberService = inject(MemberService);
  members: Member[] = [];

  ngOnInit(): void {
    this.loadMembers();
  }
  loadMembers(){
    
    this.memberService.getMembers().subscribe({      
      next: (value) => {
        this.members = value;
      }
    })
  }

}

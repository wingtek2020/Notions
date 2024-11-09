import { BusyService } from './../../../../../_services/busy.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MemberService } from './../../../../../_services/members.service';
import { ToastrService } from 'ngx-toastr';
import { inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Member } from './../../../../../_models/member';
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconComponent } from '../../../../../shared/components/common/feather-icon/feather-icon.component';
import { ChoosePhotoComponent } from '../choose-photo/choose-photo.component';


import { relationshipStatus } from '../../../../../shared/data/profile-pages/time-line';
import { SvgIconComponent } from '../../../../../shared/components/common/svg-icon/svg-icon.component';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [TabsModule, FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})

export class EditProfileComponent {
  @ViewChild('editForm') editForm?: NgForm;
  public relationshipStatus = relationshipStatus;
  private toastr = inject(ToastrService);
  private memberService = inject(MemberService);
  private spinner = inject(BusyService);
  member? : Member;

  constructor(public modalServices: NgbModal, private activeModal: NgbActiveModal) { }

  saveChanges() {
    // Additional implementation code here
    // .... & finally close the modal
    this.activeModal.close();
  }
  editImage() {
    this.modalServices.open(ChoosePhotoComponent, { size: 'lg', windowClass: 'Choose-photo-modal'})   
  }

  updateMember(){
    console.log(this.member);
    this.memberService.updateMember(this.editForm?.value).subscribe({
      next: _ => {
        this.toastr.success('Profile has been updated.');
        this.editForm?.reset(this.member);
      }
    });
   

  }
  

}


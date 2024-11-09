import { BusyService } from './_services/busy.service';
import { NgxSpinnerModule } from 'ngx-spinner';

import { PhotoGalleryModule } from '@twogate/ngx-photo-gallery';
import { AccountService } from './_services/account.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PhotoGalleryModule, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  private accountService = inject(AccountService);
  private busyService = inject(BusyService);

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if (!userString) {return};
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }
  
}

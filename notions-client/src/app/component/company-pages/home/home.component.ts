import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MemberListComponent } from "../../member-pages/member-list/member-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MemberListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  registerMode = false;

}

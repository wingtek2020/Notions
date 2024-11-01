import { TestErrorsComponent } from './../../../../errors/test-errors/test-errors.component';
import { Component } from '@angular/core';
import { AnimationEmojiComponent } from '../../../widgets/animation-emoji/animation-emoji.component';

@Component({
  selector: 'app-breadcrumb-section',
  standalone: true,
  imports: [AnimationEmojiComponent, TestErrorsComponent],
  templateUrl: './breadcrumb-section.component.html',
  styleUrl: './breadcrumb-section.component.scss'
})
export class BreadcrumbSectionComponent {

}

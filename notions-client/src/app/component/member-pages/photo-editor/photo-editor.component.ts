import { Member } from './../../../_models/member';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-photo-editor',
  standalone: true,
  imports: [],
  templateUrl: './photo-editor.component.html',
  styleUrl: './photo-editor.component.scss'
})
export class PhotoEditorComponent {
  member = input.required<Member>();

}

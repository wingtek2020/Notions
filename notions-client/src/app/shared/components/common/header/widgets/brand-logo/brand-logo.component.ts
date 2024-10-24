import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-brand-logo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './brand-logo.component.html',
  styleUrl: './brand-logo.component.scss'
})

export class BrandLogoComponent {

  @Input() currentUrl :string;

}

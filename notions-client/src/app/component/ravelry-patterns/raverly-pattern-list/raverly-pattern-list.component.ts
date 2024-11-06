import { Inspiration } from './../../../_models/user.ts/inspiration';
import { RavelryPatternCardComponent } from './../ravelry-pattern-card/ravelry-pattern-card.component';
import { Pattern } from './../../../_models/ravelryPattern';
import { RavelryService } from './../../../_services/ravelry.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-raverly-pattern-list',
  standalone: true,
  imports: [RavelryPatternCardComponent],
  templateUrl: './raverly-pattern-list.component.html',
  styleUrl: './raverly-pattern-list.component.scss'
})
export class RaverlyPatternListComponent implements OnInit {
  private ravelryService = inject(RavelryService);
  p: any;
  inspirations: Inspiration[] = [];

  ngOnInit(): void {
    this.loadPatterns();
  }

  loadPatterns(){
    this.ravelryService.getInspirations();
    this.inspirations = this.ravelryService.inspirations;
    console.log('testing ', this.inspirations);
  }

   
}

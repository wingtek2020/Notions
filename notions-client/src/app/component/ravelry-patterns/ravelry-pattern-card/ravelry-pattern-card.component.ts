import { Inspiration } from './../../../_models/user.ts/inspiration';
import { Pattern } from './../../../_models/ravelryPattern';
import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ravelry-pattern-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ravelry-pattern-card.component.html',
  styleUrl: './ravelry-pattern-card.component.scss'
})
export class RavelryPatternCardComponent implements OnInit{
  inspiration = input.required<Inspiration>();
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  constructor (){
  }
  
 
}

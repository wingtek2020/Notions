import { NgxSpinnerService } from 'ngx-spinner';
import { inject } from '@angular/core';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;
  private spinnerService = inject(NgxSpinnerService);

  busy(){
    this.busyRequestCount++;
    
    this.spinnerService.show(undefined,
      {
        type:'pacman',
        bdColor:'rgba(0, 0, 0, 0.8)',
        color:'#fff',
        size:'default'
      })
 
  }

  idle(){
    this.busyRequestCount--;
    console.log('busy', this.spinnerService);
    if(this.busyRequestCount <= 0){
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
      
  }

  constructor() { }
}

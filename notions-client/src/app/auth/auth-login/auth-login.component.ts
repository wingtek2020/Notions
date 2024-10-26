import { AccountService } from './../../_services/account.service';
import { Component, inject} from '@angular/core';
import { Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CommonService } from '../../shared/services/common.service';

import { SvgIconComponent } from '../../shared/components/common/svg-icon/svg-icon.component';
import { FeatherIconComponent } from '../../shared/components/common/feather-icon/feather-icon.component';
import { LoadingComponent } from '../../shared/skeleton-loader/widgets/loading/loading.component';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [FeatherIconComponent,SvgIconComponent,LoadingComponent
    ,RouterModule,
    FormsModule],
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.scss'
})

export class AuthLoginComponent {

  model: any = {};
  private accountService = inject(AccountService);
  public show: boolean = false;
  
  constructor(public router: Router,public commonServices :CommonService) {
    const userData = localStorage.getItem('user');
      if(userData?.length != null){
        router.navigate(['/news-feed-layout/style-1'])
      }
  }

  showPassword() {
    this.show = !this.show;
  }

  login() {
    
    this.accountService.login(this.model).subscribe({
      next: (response) => {
      
        let user = {
            token: response, //cew todo
            username: this.model.username,
          };
          localStorage.setItem("user", JSON.stringify(user));
          this.router.navigate(["/news-feed-layout/style-1"]);        
      },
      error: (error) => console.log(error),
    });
  }

  register(){
    console.log('here', this.model);
    this.router.navigate(['/others/register']).then(navigatedSuccessfully => {
      if (!navigatedSuccessfully) {
        // Handle navigation failure here
        console.error('Navigation failed'); 
      }
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { AuthRavelryService } from './../../_services/ravelryServices/auth-ravelry.service';
import { AccountService } from './../../_services/account.service';
import { Component, inject} from '@angular/core';
import { Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CommonService } from '../../shared/services/common.service';

import { SvgIconComponent } from '../../shared/components/common/svg-icon/svg-icon.component';
import { FeatherIconComponent } from '../../shared/components/common/feather-icon/feather-icon.component';
import { LoadingComponent } from '../../shared/skeleton-loader/widgets/loading/loading.component';

import { ToastrService } from 'ngx-toastr';

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
  private authService = inject(AuthRavelryService);
  public show: boolean = false;
  profile = this.authService.profile;
  
  private toaster = inject(ToastrService);
  
  constructor(public router: Router,public commonServices :CommonService,
      public http: HttpClient 
  ) {
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
       // this.toaster.info(this.model.username, 'in login');
        let user = {
            token: response, //cew todo
            username: this.model.username,
          };
          localStorage.setItem("user", JSON.stringify(user));
          this.router.navigate(["/news-feed-layout/style-1"]);        
      },
      error: (error) => this.toaster.error(error.error),
    });
  }

  register(){
   
    this.router.navigate(['/others/register']).then(navigatedSuccessfully => {
      if (!navigatedSuccessfully) {
        // Handle navigation failure here
        this.toaster.error('Navigation failed');
      }
    });
  }

  loginWithRavelry(){
    this.authService.login();
    this.getUserName();
  }

  logout(){
    this.authService.logout();
  }

  getUserName() {
    console.log(this.profile());
    const headers = { 'Authorization': 'Bearer ' + this.profile() };
    this.http.get<any>('https://api.ravelry.com/current_user.json', { headers })
        .subscribe(data => {

          console.log(data);
        })
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { CommonService } from '../../shared/services/common.service';

import { SvgIconComponent } from '../../shared/components/common/svg-icon/svg-icon.component';
import { FeatherIconComponent } from '../../shared/components/common/feather-icon/feather-icon.component';
import { LoadingComponent } from '../../shared/skeleton-loader/widgets/loading/loading.component';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [FeatherIconComponent,SvgIconComponent,LoadingComponent
    ,RouterModule,ReactiveFormsModule],
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.scss'
})

export class AuthLoginComponent {

  public loginForm: FormGroup;
  public show: boolean = false;
  
  constructor(private fb: FormBuilder, public router: Router,public commonServices :CommonService) {
    const userData = localStorage.getItem('user');
      if(userData?.length != null){
        router.navigate(['/news-feed-layout/style-1'])
      }
    this.loginForm = this.fb.group({
      email: ["Test@gmail.com", [Validators.required, Validators.email]],
      password: ["test123", Validators.required],
    });

  }

  showPassword() {
    this.show = !this.show;
  }

  login() {
    if (this.loginForm.value["email"] == "Test@gmail.com" && this.loginForm.value["password"] == "test123") {
      let user = {
        email: "Test@gmail.com",
        password: "test123",
        name: "test user",
      };
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["/news-feed-layout/style-1"]);
    }
  }

}

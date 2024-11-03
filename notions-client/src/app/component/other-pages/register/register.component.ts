import { AccountService } from "./../../../_services/account.service";
import { FormsModule } from "@angular/forms";
import { Component, inject } from "@angular/core";
import { SvgIconComponent } from "../../../shared/components/common/svg-icon/svg-icon.component";
import { FeatherIconComponent } from "../../../shared/components/common/feather-icon/feather-icon.component";
import { LoadingComponent } from "../../../shared/skeleton-loader/widgets/loading/loading.component";
import { ToastrService } from 'ngx-toastr';

import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [
    SvgIconComponent,
    FeatherIconComponent,
    LoadingComponent,
    RouterModule,
    FormsModule,
  ],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent {
  loggedIn = false;
  model: any = {};
  private accountService = inject(AccountService);
  private toaster = inject(ToastrService);

  constructor(public router: Router) {}

  register() {
    console.log(this.model);
    this.accountService.register(this.model).subscribe({
      next: (response) => {
          
        this.loggedIn = true;
        this.router.navigate(["/news-feed-layout/style-1"]);  
      },
      
      error: (error) => this.toaster.error(error.error),
    });
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        this.loggedIn = true;
        let user = {
            token: response, //cew todo
            username: this.model.username,
          };
          localStorage.setItem("user", JSON.stringify(user));
          this.router.navigate(["/news-feed-layout/style-1"]);        
      },
      error: (error) => this.toaster.error(error.error)
    });
  }
}

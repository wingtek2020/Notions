import { JsonPipe, NgIf } from '@angular/common';
import { value } from './../../../shared/interface/single-page';
import { AccountService } from "./../../../_services/account.service";
import { ReactiveFormsModule, FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from "@angular/forms";
import { Component, inject, OnInit } from "@angular/core";
import { SvgIconComponent } from "../../../shared/components/common/svg-icon/svg-icon.component";
import { FeatherIconComponent } from "../../../shared/components/common/feather-icon/feather-icon.component";
import { LoadingComponent } from "../../../shared/skeleton-loader/widgets/loading/loading.component";
import { ToastrService } from 'ngx-toastr';

import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [
    JsonPipe,
    NgIf,
    ReactiveFormsModule,
    SvgIconComponent,
    FeatherIconComponent,
    LoadingComponent,
    RouterModule,
  ],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent implements OnInit {
  loggedIn = false;
  model: any = {};
  private accountService = inject(AccountService);
  private toaster = inject(ToastrService);

  registerForm: FormGroup = new FormGroup({});

  ngOnInit() : void {
    this.initializeForm();

  }

  initializeForm(){
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', [Validators.required, this.matchValues('password')]),
    });
    this.registerForm.controls['password'].valueChanges.subscribe({
      next: () => this.registerForm.controls['confirmPassword'].updateValueAndValidity()
    });

  }
  constructor(public router: Router) {}

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get(matchTo)?.value ? null : {isMatching: true}
    }
  }
  register() {
     console.log(this.registerForm.value);
    // this.accountService.register(this.model).subscribe({
    //   next: (response) => {
          
    //     this.loggedIn = true;
    //     this.router.navigate(["/news-feed-layout/style-1"]);  
    //   },
      
    //   error: (error) => this.toaster.error(error.error),
    // });
  }

  login() {
    // this.accountService.login(this.model).subscribe({
    //   next: (response) => {
    //     this.loggedIn = true;
    //     let user = {
    //         token: response, //cew todo
    //         username: this.model.username,
    //       };
    //       localStorage.setItem("user", JSON.stringify(user));
    //       this.router.navigate(["/news-feed-layout/style-1"]);        
    //   },
    //   error: (error) => this.toaster.error(error.error)
    // });
  }
}

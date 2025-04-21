import { Component, OnInit } from '@angular/core';
import { UsernavComponent } from "../usernav/usernav.component";
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../Shared/Services/Auth/auth.service';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../../Shared/Services/Account/account.service';

@Component({
  selector: 'app-home-navbar',
  imports: [UsernavComponent,RouterModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './home-navbar.component.html',
  styleUrl: './home-navbar.component.css'
})
export class HomeNavbarComponent  implements OnInit {

  loginForm: FormGroup;
  errorMessage: string | null = null;
  isLoging = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _AccountService:AccountService
  ) {
    this.loginForm = this.fb.group({
      Usernameoremail: ['', [Validators.required]],
      loginPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
    
  }
  ngOnInit(): void {
 
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoging = isLoggedIn;
    });
    console.log(this.isLoging);
    console.log(this.authService.getRole());
  }
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
  
    this.errorMessage = null;
  
    const credentials = this.loginForm.value;
    this.authService.login(credentials).subscribe({
      next: (response: { token: string }) => {
    
        this.authService.deCodeUserData(response.token);

        document.cookie = `user_Token=${response.token}; path=/; secure; samesite=Lax`;
        this.router.navigate(['/home2/profile']);
      },
      error: (err) => {
        console.log(err);

        this.errorMessage = err.message;
      }
    });
  }

  ExternalLogin()
  {
     }
}

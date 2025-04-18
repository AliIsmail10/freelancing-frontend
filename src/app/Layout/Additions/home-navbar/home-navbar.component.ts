import { Component } from '@angular/core';
import { UsernavComponent } from "../usernav/usernav.component";
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../Shared/Services/Auth/auth.service';

@Component({
  selector: 'app-home-navbar',
  imports: [UsernavComponent,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './home-navbar.component.html',
  styleUrl: './home-navbar.component.css'
})
export class HomeNavbarComponent {

  loginForm: FormGroup;
  errorMessage: string | null = null;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      usernameoremail: ['', [Validators.required, Validators.email]],
      loginPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
    
  }
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
  
    this.isLoading = true;
    this.errorMessage = null;
  
    const credentials = this.loginForm.value;
    this.authService.login(credentials).subscribe({
      next: (response: { token: string }) => {
        this.isLoading = false;
        
        this.authService.deCodeUserData(response.token);
  
        console.log('Token =>>>:', response.token); 
        this.router.navigate(['/home2/profile']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.message;
      }
    });
  }
  
  
}

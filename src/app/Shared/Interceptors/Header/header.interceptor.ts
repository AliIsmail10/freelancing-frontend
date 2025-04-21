import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../../Services/Auth/auth.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
    const toastr= inject(ToastrService);

  try {
    // Skip for non-API requests or specific endpoints
    if (!req.url.includes('/api/') || req.url.includes('/Account/login')) {
      return next(req);
    }

    const authService = inject(AuthService);
    const token = authService.getTokenFromCookie();

    // Validate token exists and looks reasonable
    if (token && typeof token === 'string' && token.length > 10) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest' // Optional security header
        }
      });
      return next(cloned);
    }

    return next(req);
  }
   catch (error) {
    console.error('Interceptor error:', error);
     toastr.error('An error occurred while processing the request.', 'Error', )
    return next(req);
  }
};
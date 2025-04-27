import { ApplicationConfig, provideZoneChangeDetection,importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { headerInterceptor } from './Shared/Interceptors/Header/header.interceptor';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { errorInterceptor } from './Shared/Interceptors/Error/error.interceptor';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { BsDropdownModule } from 'ng-bootstrap/dropdown'
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// @NgModule({
//   imports: [
//     NgbModule
//   ],
// })


export const appConfig: ApplicationConfig = {


 
  providers: [provideHttpClient(withFetch(),withInterceptors([headerInterceptor,errorInterceptor])),
  provideAnimations(),
  provideToastr(),
  provideZoneChangeDetection({ eventCoalescing: true }), 
  provideRouter(routes),
  // importProvidersFrom(BsDropdownModule)
  
]

};


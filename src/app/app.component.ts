
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})


export class AppComponent  {
  title = 'MarketplaceFreelancers';
  
}

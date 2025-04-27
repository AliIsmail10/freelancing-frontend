
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./Layout/Additions/footer/footer.component";
import { BiddingProjectComponent } from './Components/bidding-project/bidding-project.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, BiddingProjectComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})


export class AppComponent  {
  title = 'MarketplaceFreelancers';
  
}

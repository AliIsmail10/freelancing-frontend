
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./Layout/Additions/footer/footer.component";
import { TestComponent } from './Layout/Additions/test/test.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent  {
  title = 'MarketplaceFreelancers';
  
}

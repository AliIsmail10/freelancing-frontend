import { Component } from '@angular/core';
import { SecFooterComponent } from '../../Additions/sec-footer/sec-footer.component';
import { MainSectionComponent } from "../../Additions/main-section/main-section.component";
import { RouterOutlet } from '@angular/router';
import { HomeNavbarComponent } from '../../Additions/home-navbar/home-navbar.component';
import { NewNavBarComponent } from "../../../Components/new-nav-bar/new-nav-bar.component";

@Component({
  selector: 'app-home',
  imports: [SecFooterComponent, MainSectionComponent, RouterOutlet, HomeNavbarComponent, NewNavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

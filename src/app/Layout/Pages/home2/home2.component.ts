import { Component } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeNavbarComponent } from "../../Additions/home-navbar/home-navbar.component";
import { UsernavComponent } from "../../Additions/usernav/usernav.component";

@Component({
  selector: 'app-home2',
  imports: [RouterModule, RouterOutlet, UsernavComponent],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component {

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  activeTab: string = 'wt-skills';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.activeTab = fragment;
      }
    });
  }

  activateTab(tabId: string) {
    this.activeTab = tabId;
    this.router.navigate([], { fragment: tabId });
  }
}

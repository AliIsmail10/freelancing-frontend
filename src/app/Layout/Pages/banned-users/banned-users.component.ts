import { Component, OnInit } from '@angular/core';
import { ClientView, FreelancerView } from '../../../Shared/Interfaces/Account';
import { Ban } from '../../../Shared/Interfaces/Bans';
import { AccountService } from '../../../Shared/Services/Account/account.service';
import { BansService } from '../../../Shared/Services/Bans/bans.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../Shared/Services/Auth/auth.service';

@Component({
  selector: 'app-banned-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './banned-users.component.html',
  styleUrl: './banned-users.component.css'
})
export class BannedUsersComponent implements OnInit{
  bannedUsers: Ban[] = [];
  // bannedFL:FreelancerView= {} as FreelancerView
  // bannedCL:ClientView= {} as ClientView
  searchedbans: Ban[]=[]
  constructor(private banned: BansService,
     private user:AccountService,
    private getrole:AuthService) {
      this.banned.getAllBans().subscribe(
        {
          next:(value)=>{
            this.bannedUsers = value
            this.searchedbans = value
            console.log("before")
            console.log(this.bannedUsers)
          }
        }
      )
   }

  ngOnInit() {

  }

search(searched:string){

 this.searchedbans = this.bannedUsers.filter(m=>m.bannedUserName?.toLowerCase().includes(searched.toLowerCase()));

}


}

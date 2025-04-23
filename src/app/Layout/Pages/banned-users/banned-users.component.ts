import { Component, OnInit } from '@angular/core';
import { Ban } from '../../../Shared/Interfaces/Bans';
import { BansService } from '../../../Shared/Services/Bans/bans.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-banned-users',
  imports: [CommonModule, FormsModule],
  templateUrl: './banned-users.component.html',
  styleUrl: './banned-users.component.css'
})
export class BannedUsersComponent implements OnInit{
  bannedUsers: Ban[] = [];
  searchedbans: Ban[]=[]
  constructor(private banned: BansService,
     private router:Router
    ) {}

  ngOnInit() {
    this.banned.getAllBans().subscribe(
      {
        next:(value)=>{
          this.bannedUsers = value
          this.searchedbans = value
        }
      }
    )
  }

search(searched:string){
  this.searchedbans = this.bannedUsers.filter(m=>m.bannedUserName?.toLowerCase().includes(searched.toLowerCase()));
}

navigatetodetails(id:number) {
  this.router.navigateByUrl(`/home2/bandetails/${id}`)
}

Update(id:number){
  // this.banned.updateBan(id).subscribe(
  //   {
  //     next:()=>{

  //     }
  //   }
  // );
}


}

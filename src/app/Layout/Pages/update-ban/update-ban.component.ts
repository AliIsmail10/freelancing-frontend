import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ban } from '../../../Shared/Interfaces/Bans';
import { BansService } from '../../../Shared/Services/Bans/bans.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-ban',
  imports: [CommonModule],
  templateUrl: './update-ban.component.html',
  styleUrl: './update-ban.component.css'
})
export class UpdateBanComponent {

  constructor (private activatedroute:ActivatedRoute,
    private banservice:BansService
  ){}
  currentid:number|null = 0
    ban:Ban ={} as Ban
    ngOnInit() {
      this.activatedroute.paramMap.subscribe(
        (parammap)=>{
          this.currentid= Number(parammap.get('id'));
          this.banservice.getBanByid(this.currentid).subscribe(
            (ban: Ban) => this.ban = ban
          );
        }
      )
    }


}

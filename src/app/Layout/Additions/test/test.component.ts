import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../../Shared/Services/Skill/skill.service';
import { BiddingProjectService } from '../../../Shared/Services/BiddingProject/bidding-project.service';
import { BiddingProjectFilter } from '../../../Shared/Interfaces/BiddingProject/bidding-project-filter';
import { BiddingprojectCreateUpdate } from '../../../Shared/Interfaces/BiddingProject/biddingproject-create-update';
import { MilestoneService } from '../../../Shared/Services/Milestone/milestone.service';
import { Milestone } from '../../../Shared/Interfaces/milestone';
import { event } from 'jquery';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {

  constructor(private SkillService:SkillService) { }

  ngOnInit(): void {
    this.SkillService.getSkills().subscribe((data) => {
      console.log(data);
    });

  }


}

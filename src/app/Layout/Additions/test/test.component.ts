import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../../Shared/Services/Skill/skill.service';

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

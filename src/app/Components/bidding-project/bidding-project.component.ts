import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoryService } from '../../Shared/Services/Category/category.service';
import { Category } from '../../Shared/Interfaces/category';
import { Country } from '../../Shared/Interfaces/country';
import { CountriesService } from '../../Shared/Services/Countries/countries.service';
import { SubCategoryService } from '../../Shared/Services/SubCategory/sub-category.service';
import { Currency } from '../../Shared/Enums/currency';
import { ExperienceLevel } from '../../Shared/Enums/experience-level';
import { Skill } from '../../Shared/Interfaces/Skill';
import { SkillService } from '../../Shared/Services/Skill/skill.service';
import { FormsModule } from '@angular/forms';
import { SubCategory2 } from '../../Shared/Interfaces/sub-category2';
import { BiddingProjectService } from '../../Shared/Services/BiddingProject/bidding-project.service';
import { filter } from 'rxjs';
import { BiddingProjectFilter } from '../../Shared/Interfaces/BiddingProject/bidding-project-filter';
import { BiddingProjectGetAll } from '../../Shared/Interfaces/BiddingProject/bidding-project-get-all';

@Component({
  selector: 'app-bidding-project',
  imports: [FormsModule],
  templateUrl: './bidding-project.component.html',
  styleUrl: './bidding-project.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BiddingProjectComponent implements OnInit {
  constructor(private CategoryService:CategoryService,
    private CountryService: CountriesService,
    private SubCategoryService:SubCategoryService,
    private SkillsService:SkillService,
    private BiddingProjectService:BiddingProjectService
  ){}


  Categories: Category[] = []; 
  Countries: Country[]=[];
  SubCategories: SubCategory2[] = []; 
 
  Currencies=Currency
  ExperienceLeveles= ExperienceLevel
  Skills: Skill[]=[];

  BiddingProjectFilter: BiddingProjectFilter={
    // SubCategory:[],
    // Category:[],
    // Currency:[],
    // Skills:[],
    // ExperienceLevel:[],
    // ClientCountry:[]
  }

  projects:BiddingProjectGetAll[]=[];


  expandedSections = {
    category: true,
    
  };


  ngOnInit(): void {
    this.CategoryService.GetAllCategories().subscribe({
      next: (data)=> this.Categories=data,
      error: (err) => console.log(err)
    });
  

    this.SubCategoryService.getAllSubcategories().subscribe({
      next: (data)=> {this.SubCategories=data; console.log(data)},
      error: (err)=> console.log(err)
    });

    
    

    this.CountryService.getCountries().subscribe({
      next: (data)=> this.Countries=data,
      error: (err)=> console.log(err)
    });


    this.SkillsService.getSkills().subscribe({
      next: (data)=> this.Skills=data,
      error: (err)=> console.log(err)
    });

    this.BiddingProjectService.GetAllBiddingProjects(this.BiddingProjectFilter,1,12).subscribe({
      next:(data)=>{this.projects=data, console.log(data)},
      error: (err)=> console.log(err)

    })


  }

  getEnumValues(enumObj: any): number[] {
    return Object.values(enumObj).filter(value => typeof value === 'number') as number[];
    }


    toggleSection(section: keyof typeof this.expandedSections) {
      this.expandedSections[section] = !this.expandedSections[section];
    }
  
    getSubcategoriesOfCategory(categoryId:number):SubCategory2[]{
      return this.SubCategories.filter(sc=>sc.categoryId==categoryId);
    }

    selectSubCategory(subcategoryid:number){

      if(this.BiddingProjectFilter.SubCategory?.includes(subcategoryid)){
        this.BiddingProjectFilter?.SubCategory?.splice(subcategoryid,1)
      }
      else{
        this.BiddingProjectFilter?.SubCategory?.push(subcategoryid);
      }

      this.BiddingProjectService.GetAllBiddingProjects(this.BiddingProjectFilter,1,12).subscribe({
        next: (data)=>this.projects=data,
        error: (err)=> console.log(err)
      })
    }


    selectMinPrice(minPrice:number){
      this.BiddingProjectFilter.minprice=minPrice;
      this.BiddingProjectService.GetAllBiddingProjects(this.BiddingProjectFilter,1,12).subscribe({
        next: (data)=>this.projects=data,
        error: (err)=> console.log(err)
      })
    }

    selectMaxPrice(maxPrice:number){
      this.BiddingProjectFilter.maxPrice=maxPrice;
      this.BiddingProjectService.GetAllBiddingProjects(this.BiddingProjectFilter,1,12).subscribe({
        next: (data)=>this.projects=data,
        error: (err)=> console.log(err)
      })
    }

    selectSkills(skillId:number){
      this.BiddingProjectFilter.Skills?.push(skillId);
      this.BiddingProjectService.GetAllBiddingProjects(this.BiddingProjectFilter,1,12).subscribe({
        next: (data)=>this.projects=data,
        error: (err)=> console.log(err)
      })
    }

    selectCurrency(currencyId:number){
      this.BiddingProjectFilter.Currency?.push(currencyId);
      this.BiddingProjectService.GetAllBiddingProjects(this.BiddingProjectFilter,1,12).subscribe({
        next: (data)=>this.projects=data,
        error: (err)=> console.log(err)
      })
    }

    selectExpLevel(expLevelId:number){
      this.BiddingProjectFilter.ExperienceLevel?.push(expLevelId);
      this.BiddingProjectService.GetAllBiddingProjects(this.BiddingProjectFilter,1,12).subscribe({
        next: (data)=>this.projects=data,
        error: (err)=> console.log(err)
      })
    }


    selectClientCountry(clientCountryId:number){
      this.BiddingProjectFilter.ClientCountry?.push(clientCountryId);
      this.BiddingProjectService.GetAllBiddingProjects(this.BiddingProjectFilter,1,12).subscribe({
        next: (data)=>this.projects=data,
        error: (err)=> console.log(err)
      })
    }

    selectMinExpectedDuration(minExpectedDuration:number){
      this.BiddingProjectFilter.MinExpectedDuration=minExpectedDuration;
      this.BiddingProjectService.GetAllBiddingProjects(this.BiddingProjectFilter,1,12).subscribe({
        next: (data)=>this.projects=data,
        error: (err)=> console.log(err)
      })
    }

    selectMaxExpectedDuration(maxExpectedDuration:number){
      this.BiddingProjectFilter.MaxExpectedDuration=maxExpectedDuration;
      this.BiddingProjectService.GetAllBiddingProjects(this.BiddingProjectFilter,1,12).subscribe({
        next: (data)=>this.projects=data,
        error: (err)=> console.log(err)
      })
    }

    // selectMinNumOfProposals(minNumOfProposals:number){
    //   this.BiddingProjectFilter.MinNumOfProposals=minNumOfProposals;
    //   this.BiddingProjectService.GetAllBiddingProjects(this.BiddingProjectFilter,1,12).subscribe({
    //     next: (data)=>this.projects=data,
    //     error: (err)=> console.log(err)
    //   })
    // }

    // selectMaxNumOfProposals(maxNumOfProposals:number){
    //   this.BiddingProjectFilter.MaxNumOfProposals=maxNumOfProposals;
    //   this.BiddingProjectService.GetAllBiddingProjects(this.BiddingProjectFilter,1,12).subscribe({
    //     next: (data)=>this.projects=data,
    //     error: (err)=> console.log(err)
    //   })
    // }
    

}

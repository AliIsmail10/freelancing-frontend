import { Component } from '@angular/core';
import { ReviewService } from '../../../Shared/Services/Review/review.service';
import { Review } from '../../../Shared/Interfaces/Reviews';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  constructor (private _Review:ReviewService) { }
  ngOnInit(): void {
    console.log("Test component initialized");
  
    this.getReviewById(4);
  }
  getReviewById(id: number): Review {
    let review: Review | undefined;
    this._Review.getReviewById(id).subscribe((data) => {
      review = data;
      console.log("Review by ID:", review);
    });
    return review as Review; 
  }
}

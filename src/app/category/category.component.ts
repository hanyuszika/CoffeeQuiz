import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Question;
  questionCategories: any;

  constructor(private questionService: QuestionService) { }

  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.questionService.getCategories().subscribe(
        data => {
          this.isLoading = false;
          //console.log(data),
          this.questionCategories = data;
        },
        err => {
          return console.log(err);
        }
      )
    }, 1000);
  }

  onChange(typeValue) {
    console.log(typeValue);
    this.isLoading = true;
    this.questionService.getCategory(typeValue).subscribe(
      data => {
        console.log(data.title)
        this.isLoading = false;
        },
      err => {
        return console.log(err);
      }
    )
  }
}

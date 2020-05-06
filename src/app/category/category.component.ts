import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { randomQuestion, Category } from '../question';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryDetails: Category;
  questionCategories: any;
  remainingTime: any = 10;
  countDownVisibility: boolean = true;
  isLoading: boolean = true;
  inputAnswer: string;

  constructor(private questionService: QuestionService) { }

  check(){
    console.log("I have to implement it later");
    //this.inputAnswer = document.getElementById('question').value;
    console.log(this.inputAnswer)
  }

  refresh(): void {
    window.location.reload();
  }

  showAnswer() {
    this.categoryDetails.hidden = false;
    this.countDownVisibility = false;
  }

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

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  onChange(typeValue) {
    //console.log(typeValue);
    this.isLoading = true;
    this.questionService.getCategory(typeValue).subscribe(
      data => {
        console.log(data);
        let index = this.getRandomInt(data.clues_count)
        this.categoryDetails = {
          categoryid: data.id,
          category: data.title,
          count: data.clues_count,
          answer: data.clues[index].answer,
          question: data.clues[index].question,
          questionid: index,
          hidden: true
        }
        console.log(this.categoryDetails);
        this.isLoading = false;
      },
      err => {
        return console.log(err);
      }
    )
    var x = setInterval(() => {
      this.remainingTime = this.remainingTime - 1;
      if (this.remainingTime <= 0) {
        this.countDownVisibility = false;
        clearInterval(x);
      }
    }, 1000);
  }
}

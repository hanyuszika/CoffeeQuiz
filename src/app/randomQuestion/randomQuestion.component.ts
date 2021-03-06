import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { randomQuestion } from '../question';

@Component({
  selector: 'app-randomQuestion',
  templateUrl: './randomQuestion.component.html',
  styleUrls: ['./randomQuestion.component.css']
})
export class RandomQuestionComponent implements OnInit {
  questionDetails: randomQuestion;

  constructor(private questionService: QuestionService) { }

  isLoading: boolean = true;
  remainingTime: any = 10;
  countDownVisibility: boolean = true;
  //inputAnswer: string;

  refresh(): void {
    window.location.reload();
  }

  showAnswer() {
    this.questionDetails.hidden = false;
    this.countDownVisibility = false;
  }

  check(){
    console.log("I have to implement it later");
    //console.log(this.inputAnswer)
  }

  ngOnInit(): void {

    this.questionService.getQuestions().subscribe(
      data => {
        this.isLoading = false;
        console.log(data[0]),
          console.log("Question: " + data[0].question),
          console.log("Category: " + data[0].category.title),
          this.questionDetails = {
            difficulty: data[0].value,
            category: data[0].category.title,
            question: data[0].question,
            answer: data[0].answer,
            airdate: data[0].airdate,
            id: data[0].id,
            hidden: true,
          }
      },
      err => {
        return console.log(err);
      }
    )
    
    setTimeout(() => { this.questionDetails.hidden = false }, 10000);
    var x = setInterval(() => {
      this.remainingTime = this.remainingTime - 1;
      if (this.remainingTime <= 0) {
        this.countDownVisibility = false;
        clearInterval(x);
      }
    }, 1000);
  }
}

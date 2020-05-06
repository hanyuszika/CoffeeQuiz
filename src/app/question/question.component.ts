import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit { 
  questionDetails: Question;

  constructor(private questionService: QuestionService) { }

  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
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
        //localStorage.setItem('question', JSON.stringify(data.results))
      },
      err => {
        return console.log(err);
      }
    )
  }, 1000);
  }
}

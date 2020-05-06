import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http: HttpClient) { }
  
  getCategories() {
    return this.http.get<any>("http://jservice.io/api/categories?count=100&offset=100");
  }
  getCategory(id){
    return this.http.get<any>("http://jservice.io/api/category?id=" + id);
  }
  getQuestions() {
    return this.http.get<any>("http://jservice.io/api/random")
  }
}

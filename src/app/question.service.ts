import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http: HttpClient) { }
  getCategory() {
    return this.http.get<any>("http://jservice.io/api");
  }
  getQuestions() {
    return this.http.get<any>("http://jservice.io/api/random")
  }
/*
  getPokemons(url: string) {
    return this.http.get<any>(url);
  }

  getPokemonDetails(url: string){
    return this.http.get<any>(url);
  }*/
}

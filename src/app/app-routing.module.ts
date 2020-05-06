import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomQuestionComponent} from './randomQuestion/randomQuestion.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: RandomQuestionComponent },
  { path: 'category', component: CategoryComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

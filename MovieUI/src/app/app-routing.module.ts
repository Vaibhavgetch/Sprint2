import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AllMovieComponent } from './all-movie/all-movie.component';
import { GetMovieComponent } from './get-movie/get-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';


const routes: Routes = [
  {path:'addMovie', component:AddMovieComponent},
  {path:'movies',component:AllMovieComponent},
  {path:'findMovie',component:GetMovieComponent},
  {path:'deleteMovie',component:DeleteMovieComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import {movie} from './model/movie' ;

import { movieResponse } from 'src/dto/movieResponse';
import { MovieServiceService } from './services/movie-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
 

  movieModel = new movie("","","",0,"",null);

  movieresp:movieResponse=null;
  show:boolean=false;
   __service:MovieServiceService;

  constructor( __service:MovieServiceService) {
   this.__service=__service ;
   }

  ngOnInit(): void {
  }

  onSubmitAddMovie(addMovieForm:any){
   let details = addMovieForm.value ;
   
   let movieName=details.movieName;
   let movieGenre=details.movieGenre;
   let movieDirector=details.movieDirector;
   let movieLength=details.movieLength;
   console.log(movieLength) ;
   let languages=details.languages;
   console.log(languages) ;
   let movieReleaseDate=details.movieReleaseDate;
   let movieobj :movie= new movie(movieName,movieGenre,movieDirector,movieLength,languages,movieReleaseDate);
   
   let result : Observable<movieResponse> = this.__service.addMovie(movieobj);
   result.subscribe((response:movieResponse)=>{
     this.movieresp=response;
  },
     
  err =>{
    console.log("Error"+err);
  });

  this.show=true;

}
}

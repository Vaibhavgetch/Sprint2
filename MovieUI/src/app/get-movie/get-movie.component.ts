import { Component, OnInit } from '@angular/core';
import { movieResponse } from 'src/dto/movieResponse';
import { MovieServiceService } from '../add-movie/services/movie-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-movie',
  templateUrl: './get-movie.component.html',
  styleUrls: ['./get-movie.component.css']
})
export class GetMovieComponent implements OnInit {

  movie:movieResponse=null;

  movies:Array<movieResponse>=[];
  __service:MovieServiceService;
  check:boolean=false;
  errorShow=false;

  constructor(__service:MovieServiceService) {
    this.__service=__service;
   }

  ngOnInit(): void {
  }

  getMovie(getMovieForm:any){

    let movieId = getMovieForm.value.movieId ;
    let response:Observable<movieResponse>=this.__service.getMovie(movieId);
    response.subscribe((movie:movieResponse) =>{
      this.movie=movie;
      this.check=true;
      this.errorShow=false;
  },
    error =>{
      this.errorShow=true;
      this.check=false;
      console.log("Error "+error)
    });

    

  }
}

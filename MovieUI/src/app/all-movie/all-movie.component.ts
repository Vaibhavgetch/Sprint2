import { Component, OnInit } from '@angular/core';
import { movieResponse } from 'src/dto/movieResponse';
import { MovieServiceService } from '../add-movie/services/movie-service.service';

@Component({
  selector: 'app-all-movie',
  templateUrl: './all-movie.component.html',
  styleUrls: ['./all-movie.component.css']
})
export class AllMovieComponent implements OnInit {

  movies:movieResponse[]=[] ;
  __service:MovieServiceService;

  constructor(__service:MovieServiceService) {

    this.__service=__service;
   }

  ngOnInit(): void {
    this.__service.fetchAllTheaters().subscribe(movies =>{this.movies=movies});
  }

}

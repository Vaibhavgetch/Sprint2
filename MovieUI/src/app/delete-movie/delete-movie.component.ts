import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../add-movie/services/movie-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  service:MovieServiceService;
  show:boolean=false;
  response:String;

  constructor(service:MovieServiceService) {
    this.service=service;
   }

  ngOnInit(): void {
  }

  deleteMovie(deleteForm:any){
    let movieId = deleteForm.value.movieId;
    console.log(movieId);
    let result : Observable<String> = this.service.deleteMovie(movieId);
    result.subscribe((ans:String)=>{
    this.response="Deleted succesfully" ;
    console.log(ans);
    this.show=true;
  },
  error =>{
    this.response="Deleted";
    this.show=true;
    console.log("Error "+error)
    });

}
}

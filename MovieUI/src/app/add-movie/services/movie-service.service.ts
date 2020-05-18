import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movieResponse } from 'src/dto/movieResponse';
import {movie} from '../model/movie' ;





@Injectable({
  providedIn: 'root'
})

export class MovieServiceService {

  client:HttpClient;
  baseMovieUrl="http://localhost:8086/movies";

 
  constructor(client:HttpClient) { 
    this.client=client;
  }

  addMovie(movie:movie):Observable<movieResponse>{
    let url = this.baseMovieUrl+"/add";
    let observable : Observable<movieResponse> = this.client.post<movieResponse>(url,movie);
    return observable;
}

fetchAllTheaters():Observable<movieResponse[]>{
  let url = this.baseMovieUrl;
  let observable : Observable<movieResponse[]>=this.client.get<movieResponse[]>(url);
  return observable;
}

getMovie(movieId:number):Observable<movieResponse>{
  let url = this.baseMovieUrl+"/get/"+movieId;
  let result:Observable<movieResponse> = this.client.get<movieResponse>(url);
  return result;
}

deleteMovie(movieId:number):Observable<string>{
  let url = this.baseMovieUrl+"/delete/"+movieId;
  let result:Observable<string> = this.client.delete<string>(url);
  return result;
}



}

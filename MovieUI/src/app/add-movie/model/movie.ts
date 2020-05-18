export class movie{
    
    
	 movieName : String;
	 movieGenre : String;
	 movieDirector : String;
	 movieLength : Number;
	 movieReleaseDate : Date;
	 languages: String;
	 

	 constructor(movieName : String,movieGenre : String,movieDirector : String,movieLength : Number,languages: String,movieReleaseDate : Date){

	 this.movieName =movieName;
	 this.movieGenre =movieGenre;
	 this.movieDirector= movieDirector;
	 this.movieLength =movieLength;
	 this.movieReleaseDate =movieReleaseDate;
	 this.languages = languages;
	 

	 }
}
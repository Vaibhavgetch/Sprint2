export class movieResponse{

    movieId: Number;
    movieName : String;
    movieGenre : String;
    movieDirector : String;
    movieLength : Number;
    languages: String;
    movieReleaseDate : Date;
   
   

    constructor(movieId: Number,movieName : String,movieReleaseDate : Date,movieGenre : String,movieDirector : String,movieLength : Number,languages: String){
             
        this.movieId=movieId;
        this.movieName=movieName ;
        this.movieGenre=movieGenre;
        this.movieDirector=movieDirector;
        this.movieLength=movieLength ;
        this.languages=languages ;
        this.movieReleaseDate=movieReleaseDate;
        
        




    }




}
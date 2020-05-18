import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AllMovieComponent } from './all-movie/all-movie.component';
import { GetMovieComponent } from './get-movie/get-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component'

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    AllMovieComponent,
    GetMovieComponent,
    DeleteMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

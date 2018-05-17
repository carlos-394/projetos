import { Component, OnInit } from '@angular/core';
import{Movies} from '../Movies';
import{MOVIES} from '../mock-movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
 
   moviess = MOVIES;

   selectedMovie: Movies;

  constructor() {   
   }

  ngOnInit() {
  }

  onSelect(movie: Movies): void{
       this.selectedMovie = movie;
  }

}

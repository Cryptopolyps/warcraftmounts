import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  public imgPath = 'https://www.alltimelines.com/wp-content/uploads/2015/08/warcraft-movie-banner-01-copy.jpg';
  constructor() { }

  ngOnInit() {
  }

}

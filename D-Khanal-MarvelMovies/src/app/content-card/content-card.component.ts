import { Component, OnInit } from '@angular/core';
import{ ContentList } from '../helper-files/content-list';
import {Content} from "../helper-files/content-interface";
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
MarvelMovie:Content ={
  id:1,
  title:"Iron Man",
  description:"This movie explains how Ironman was created",
  creator:"Marvel studios",
  imgURL:"https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
  type:"Action"

}
  MarvelMovie2:Content ={
    id:2,
    title:"Thor",
    description:"This movie explains about Thor, asgard and their origin",
    creator:"Marvel studios",
    imgURL:"https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX1000_.jpg",
    type:"Action"

  }
  MarvelMovie3:Content ={
    id:3,
    title:"Captain America: The First Avenger",
    description:"This movie explains how a small boy with a pure heart became Captain America.",
    creator:"Marvel studios",
    imgURL:"https://moviesmedia.ign.com/movies/image/object/034/034020/cap-1st-poster1.jpg",
    type:"Action"

  }
  MyMarvelMovies = new ContentList(this.MarvelMovie);
contentList = this.MyMarvelMovies.getitems();
  constructor() {
    this.MyMarvelMovies.addContent(this.MarvelMovie);
    this.MyMarvelMovies.addContent(this.MarvelMovie2);
    this.MyMarvelMovies.addContent(this.MarvelMovie3);
  }
  ngOnInit(): void {
    const div = document.getElementById('MyMarvelMovies');
    console.log(div);
    if(div) {
      div.innerHTML += this.MyMarvelMovies.printProperties(0);
      div.innerHTML += this.MyMarvelMovies.printProperties(1);
      div.innerHTML += this.MyMarvelMovies.printProperties(2);
    }
  }
}

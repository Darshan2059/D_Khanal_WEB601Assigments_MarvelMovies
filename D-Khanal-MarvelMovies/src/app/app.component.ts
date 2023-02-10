import { Component } from '@angular/core';
import { Content } from  './helper-files/content-interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D-Khanal-MarvelMovies';
  contentItem:Content = {
    id:1,
    title:"Iron Man",
    description:"Iron Man shows how situation made a man into Ironman",
    creator:"Marvel studios",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
    type:"Action/Adventure",
    tags:["Superhero", "Movie"]
  };
  contentItem2:Content = {
    id:2,
    title:"Thor",
    description:"This movie explains about Thor, asgard and their origin",
    creator:"Marvel studios",
    imgURL:"https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX1000_.jpg",
    type:"Action",
    tags:["Thor", "Movie"]

  };
  contentItem3:Content = {
    id:3,
    title:"Captain America: The First Avenger",
    description:"This movie explains how a small boy with a pure heart became Captain America.",
    creator:"Marvel studios",
    imgURL:"https://moviesmedia.ign.com/movies/image/object/034/034020/cap-1st-poster1.jpg",
    type:"Action",
    tags:["CaptainAmerica", "Movie"]
  };
  contentItem4:Content = {
    id:4,
    title:"Ant-Man",
    description:"This movie explains how a man turns into a AntMan",
    creator:"Marvel studios",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg",
    type:"Action",
    tags:["AntMan", "Movie"]
  };
  contentItem5:Content = {
    id:5,
    title:"Iron-Man 2",
    description:"This movie explains how world become better by the rise of Iron Man",
    creator:"Marvel studios",
    imgURL:"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
    type:"Action",
    tags:["IronMan2", "Movie"]
  };


  contentArray: Content[];
  constructor(){
    this.contentArray = [this.contentItem];

    this.contentArray.push(this.contentItem2);
    this.contentArray.push(this.contentItem3);
    this.contentArray.push(this.contentItem4);
    this.contentArray.push(this.contentItem5);

  }
}

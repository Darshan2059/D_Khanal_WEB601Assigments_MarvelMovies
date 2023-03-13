
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

@Input() content: Content;
  constructor(){
    this.content = {
      id:1,
      title:"Iron Man",
      description:"Iron Man shows how situation made a man into Ironman",
      creator:"Marvel studios",
      imgURL:"https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
      type:"Action",
      tags:["Superhero", "Movie"]
    };
  }

  imageText() {
    console.log("Image Url: " + this.content.imgURL + " id:" + this.content.id + " Title:" + this.content.title);
  }

  ngOnInit(): void {}

}

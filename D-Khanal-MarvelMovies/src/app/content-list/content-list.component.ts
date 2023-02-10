import { style } from '@angular/animations';
import {Component, Input, OnInit} from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  @Input() content: Content;
  constructor() {
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
  ngOnInit(): void {
  }

  imageText() {
    console.log("Image Url: " + this.content.imgURL + " id:" + this.content.id + " Title:" + this.content.title);
  }
}

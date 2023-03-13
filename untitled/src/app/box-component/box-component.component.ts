import { Component } from '@angular/core';
import { Box } from "../helper-files/content-interface";

@Component({
  selector: 'app-box-component',
  templateUrl: './box-component.component.html',
  styleUrls: ['./box-component.component.css']
})
export class BoxComponentComponent {
  boxes: Box[] = [
    {
      size: 5,
      description: 'Books',
      labelCode: 'ABCD1234',
      recipient: 'John Doe',
      weight: 2.5
    }
  ];

  addBox(box: Box) {
    this.boxes.push(box);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() post!: any; 

  counter = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  star = false;
  bg = false;
  addStar() {
    this.star = !this.star;
    this.bg  = !this.bg;
  }

  // @Input() title!: string; 
  // @Input() author!: string; 

}

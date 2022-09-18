import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

// part 2 data binding
counter= 0;

increment() {
  this.counter++;
}

decrement() {
  this.counter--;
}

increment1() {
  this.counter++;
}

decrement2() {
  this.counter--;
}

// part one
pippos: string[] = ["giovanni", "puccio"];

getName() {
  return "miao"
}

@Input() name!: string; 

}

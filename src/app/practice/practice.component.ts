import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  names = ['pippo', 'pluto', 'paperino'] //ngFor

  showBg = false; //ngclass
  showBox = true; //ngIf

  toggleBg() {
    this.showBg = !this.showBg
  }

  toggleBox() {
    this.showBox = !this.showBox
  }

}

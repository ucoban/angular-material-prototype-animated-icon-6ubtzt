import { Component } from '@angular/core';

@Component({
  selector: 'ng-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular Material Animated Icons';
  animate = false;

  toggleAnimate(){
    this.animate = !this.animate;
  }
}

import { Component, OnInit } from '@angular/core';

import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styles: [
  ]
})
export class FromEventComponent implements OnInit {

  el: HTMLElement;
  message: string;

  public positionX: number;
  public positionY: number;

  constructor() {




  }

  ngOnInit(): void {


    this.message = 'observer from event was initialized';


    this.el = document.getElementById('h4');

    const mouseMoves = fromEvent(this.el, 'mousemove');

    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {


      this.positionX = evt.clientX;
      this.positionY = evt.clientY;

      console.log(`Coords  y:${evt.clientX}, x:${evt.clientY}`);

      if (evt.clientX < 150 || evt.clientY < 100) {
        this.message = 'Observer is unsuscribed... end';          
        subscription.unsubscribe();
      }


    },
      (error) => { console.error('Oops Houston we have a trouble') },
      () => {
        this.message = 'fin del observer';

      }
    );
  }

}

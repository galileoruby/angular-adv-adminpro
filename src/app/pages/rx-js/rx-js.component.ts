import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter, takeLast } from 'rxjs/operators';


@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styles: [
  ]
})
export class RxJsComponent implements OnInit, OnDestroy {


  intervalSubs: Subscription;

  constructor() {


    // const ob$: Observable<number> = 
    // of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(filter( v => v % 2 === 0), map( v => v * 10));

    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => { console.log('subs:', valor); },
    //   (error) => { console.error('error:', error) },
    //   () => { console.info('observador terminado') }
    // );

    this.intervalSubs = this.retornaIntervalo().subscribe(
      console.log
    );


  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }


  retornaIntervalo(): Observable<number> {
    return interval(400)
      .pipe(
        // take(10),
        // map(valor => valor + 1),
        // filter(x => (x % 2 === 0) ),
        // takeLast(4),
      );



  }

  retornaObservable(): Observable<number> {
    let i = -1;


    return new Observable<number>(observer => {


      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1500

      )
    });


  } //retornaObservable(): Observable<number> {



}

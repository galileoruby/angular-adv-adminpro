import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public titulo: string;
  public tituloSubs: Subscription;

  constructor(
    private router: Router
  ) { }


  ngOnDestroy(): void {
    this.tituloSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.getArgumentsRuta().subscribe(({ titulo }) => {
      this.titulo = titulo;
      document.title = `Admin pro -- ${titulo}`;
    });


  }


  getArgumentsRuta() {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild == null),
        map((event: ActivationEnd) => event.snapshot.data)
      );

  }


}

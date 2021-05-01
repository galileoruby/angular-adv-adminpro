import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  menu: any[] = [];

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    }

    )

  }


  getUsuarios() {

    return new Promise(resolve => {
      fetch('https://reqres.in/api/unknown')
        .then(resp => resp.json())
        .then(body => resolve(body.data))
    });


  }


  //   const promesa = new Promise((resolve, reject) => {


  //     this.menu = [
  //       {
  //         titulo: 'Dashboard!!!',
  //         icono: 'flag-icon-my',
  //         submenu: [
  //           { titulo: 'Main', url: '' },
  //           { titulo: 'Progressbar', url: 'progress' },
  //           { titulo: 'grafica', url: 'grafica1' },
  //           { titulo: 'pro-mesas', url: 'promises' }
  //         ]

  //       }
  //     ];

  //     // if (true) {
  //     //   resolve('retorno exitoso de promesas');
  //     // }
  //     // else {
  //     reject(this.menu);
  //     // }
  //   }

  //   );

  //   promesa.then((ms: string) => {
  //     this.imprimeResolve(ms);
  //   })
  //     .catch((error: any[]) => {
  //       // this.imprimeResolve(error);
  //       this.imprimeMenu(error);
  //     });


  //   console.log('fin del init');



  // }

  // imprimeResolve(msg: string) {
  //   console.log('impresion desde funcion resolve:', msg);
  // }

  // imprimeMenu(arr: any[]) {

  //   console.log(arr);

  // }

}

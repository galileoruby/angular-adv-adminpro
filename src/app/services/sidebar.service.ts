import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu: any[] = [
    {
      titulo: 'Dashboard!!!',
      icono: 'mdi mdi-message',
      submenu: [
        { titulo: 'Main', url: '' },
        { titulo: 'Progressbar', url: 'progress' },
        { titulo: 'grafica', url: 'grafica1' },
        { titulo: 'pro-mesas', url: 'promises' },
        { titulo: 'rxjs', url: 'rxjs' },
        { titulo: 'raton', url: 'fromEvent' }
      ]

    }
  ];

  constructor() { }
}

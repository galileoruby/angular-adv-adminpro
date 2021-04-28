import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu: any[] = [
    {
      titulo: 'Dashboard!!!',
      icono: 'flag-icon-my',
      submenu: [
        { titulo: 'Main', url: '' },
        { titulo: 'Progressbar', url: 'progress' },
        { titulo: 'grafica', url: 'grafica1' }
      ]

    }
  ];

  constructor() { }
}

import { Component, Input, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {


  @Input() titulo: string = 'sin titulo';
  @Input() data:number[]=[];   

  @Input('leyenda') doughnutChartLabels: Label[] = ['Leyenda-1', 'Leyenda-2', 'Leyenda-3'];

   
  ngOnInit(): void {        
  }

  

  // public doughnutChartData: MultiDataSet = [this.data]   ;

  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009fee', '#f02059'] }
  ]

}

import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @Input() data!:ChartData<'bar'>;

  @ViewChildren(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        //min: 0,
      },
      y: {
         min: 10
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      // datalabels: {
      //   anchor: 'end',
      //   align: 'end'
      // }
    },
    indexAxis: 'x',
  };
  public barChartType: ChartType = 'bar';


  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartOptions!.indexAxis="y";
      this.barChartOptions!.scales!["y"]!.min=0;
    }
  }

}

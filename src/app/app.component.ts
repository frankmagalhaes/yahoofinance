import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-app';

  public dataOpen: any = [];
  public dataTime: any = [];
  public dataResult: any = [];
  public dataDay: any = [];
  @ViewChild("myCanvas", { static: true }) elemento!: ElementRef;
 
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getDataChartResult();
  }

  getGrafic() {

    new Chart(this.elemento.nativeElement, {
      type: 'line',
      data: {
        labels: this.dataTime,
        datasets: [
          {
            label: 'Variação em relaçào a D-1 % = ',
            data: this.dataResult
          },
          {
            label: 'Variação em relação a primeira data % = ',
            data: this.dataDay
          },

        ]
      }
    });
  }


  getDataChartResult() {

    this.dataService.getdata().subscribe(
      data => {
        data.chart.result.forEach((a: any) => {
          a.indicators.quote.forEach((b: any, i: any) => {
            this.dataOpen = b.open;
            this.getCalc(a, b);
            a.timestamp.forEach((c: any) => {
              this.dataTime.push(this.getDate(c));
            })
            b.open.forEach((d: any, i: any) => {
              this.dataResult.push(this.getCalc(b.open[i-1], b.open[i]))
            })
            b.open.forEach((d: any, i: any) => {
              this.dataDay.push(this.getCalc(b.open[0], b.open[i]))
            })
            this.getGrafic();

          })
        });
      }
    );

  }

  getTransform(a: number) {
    return `USD ${Number(a).toFixed(2)}`
  }

  getDate(a: number) {
    let unixTime = a;
    let date = new Date(unixTime * 1000);
    return date.toLocaleDateString("pt-br");
  }

  getCalc(a: any, b: any) {
    let c = b - a;
    let result = (c / a) * 100;
    return result.toFixed(2);
  }


}



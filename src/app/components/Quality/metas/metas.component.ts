import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.scss']
})
/**
 * Encargado del control de datos de las metas
 */
export class MetasComponent implements OnInit {
    fechaIncial:Date=new Date("2011-06-08");
    fechaFinal:Date=new Date("2022-06-08");


    constructor() { }


    ngOnInit(): void {
    }

    horizontalOptions = {
        indexAxis: 'y',
        color:'42A5F5',
        plugins: {
            legend: {
                display:false,
                labels: {
                    color: '#495057'
                }
            },
            title: {
                display: true,
                text: 'General'
            },
            subtitle: {
                display: true,
                text: `Desde  ${this.fechaIncial.toLocaleString().split(',')[0]} a ${this.fechaFinal.toLocaleString().split(',')[0]}`
            },

        },

        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#42A5F5'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    multiAxisData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: [
                '#EC407A',
                '#AB47BC',
                '#42A5F5',
                '#7E57C2',
                '#66BB6A',
                '#FFCA28',
                '#26A69A'
            ],
            xAxisID: 'x',
            data: [65, 59, 80, 81, 56, 55, 10]
        },]
    };


}

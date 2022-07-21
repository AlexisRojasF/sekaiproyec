import { Component, Input, OnInit } from '@angular/core';
import { InformeService } from 'src/app/service/informe.service';
import { Informe } from '../../../api/informe';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
    values: number[];
    piso:number= 0;
    techo:number=200;
    data:any;
    chartOptions:any;
    informe:Informe[]=[];
    valores:number[]=[];
    labels:String[]=[];

    servicio: InformeService;

  fechaIncial:Date=new Date("2011-06-08");
  fechaFinal:Date=new Date("2022-06-08");

  constructor(informeVentas:InformeService ) {
    this.servicio= informeVentas;
    this.servicio.GetSeguimientoPorVendedor(this.fechaIncial.toISOString().split("T")[0],this.fechaFinal.toISOString().split("T")[0]).subscribe(resp=>{
         this.informe=resp;
        //  console.log("si pase");
        //  console.log(resp);
    });
    console.log(this.fechaIncial.toISOString().split("T")[0]);
    console.log("inicia el ciclo condenado")

  }

  ngOnInit(): void {
    for(let i =0;i<this.informe.length;i++){
        console.log(i)
        this.valores.push(this.informe[i].parcial);
        this.labels.push(this.informe[i].pronombre);
        if(this.informe[i].parcial>this.techo){
            this.techo=this.informe[i].parcial;
        }
        if(this.informe[i].parcial<this.piso){
            this.piso=this.informe[i].parcial;
        }

    }
    console.log("piso: "+this.piso+"  techo: "+this.techo);
    //console.log(this.informe.length);
    //this.informe=this.informe.sort((a,b)=> a.parcial-b.parcial);
    // this.piso=this.informe[0].parcial;
    // this.techo=this.informe[(this.informe.length-1)].parcial;
    //console.log("piso: "+this.piso+"  techo: "+this.techo);

    this.values=[this.piso,this.techo];
    this.data = {
        labels: ['A','B','C'],
        datasets: [
            {
                data: this.valores,
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726"
                ],
                hoverBackgroundColor: [
                    "#64B5F6",
                    "#81C784",
                    "#FFB74D"
                ]
            }
        ]
    };

  }

  public filtrar(){

    // this.displayData[0].data=  Object.assign([],this.barChartData[0].data);
    // this.displayChartLabels = Object.assign([], this.barChartLabels)
    // var seleccionados=[];
    // var labels=[];

    // for(let d of this.displayData[0].data){
    //   if(Number(d)>= this.value && Number(d)<=this.maxValue){

    //     const indice =this.displayData[0].data.indexOf(d);
    //     seleccionados.push(d);
    //     labels.push(this.displayChartLabels[indice]);

    //   }
    // }

    // this.displayData[0].data= Object.assign([],seleccionados);
    // this.displayChartLabels = Object.assign([], labels)

  }

  public  agreagar (){

  }

  public eliminar(){

  }

  public editar(id:number){

  }
}

import { Component, Input, OnInit } from '@angular/core';
import { InformeService } from 'src/app/service/informe.service';
import { Informe } from '../../../api/informe';
import { InformeVendedor } from '../../../api/informe-vendedor';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
    @Input() selector:Number=2;
    values: number[];
    piso:number= Number.POSITIVE_INFINITY;
    techo:number=Number.NEGATIVE_INFINITY;
    data:any;
    datos:any;
    chartOptions:any;
    informe:Informe[]=[];
    informeVendedores:InformeVendedor[]=[];
    valores:number[]=[];
    labels:String[]=[];
    servicio: InformeService;
    @Input() fechaIncial:Date=new Date("2011-06-08");
    @Input() fechaFinal:Date=new Date("2022-06-08");

  constructor(informeVentas:InformeService ) {
    this.servicio= informeVentas;
    console.log("selector: "+this.selector);
    console.log(this.fechaIncial.toISOString().split("T")[0]);
    console.log(this.fechaFinal.toISOString().split("T")[0]);
    if(this.selector==1){
        //console.log(this.fechaIncial.toISOString().split("T")[0]);
        this.servicio.GetInfVentasByProducto(this.fechaIncial.toISOString().split("T")[0],this.fechaFinal.toISOString().split("T")[0]).subscribe(resp=>{
             this.informe=resp;
             for(let i =0;i< this.informe.length;i++){
                this.valores.push( this.informe[i].parcial);
                this.labels.push( this.informe[i].pronombre);
                if( this.informe[i].parcial>this.techo){
                    this.techo= this.informe[i].parcial;
                }
                if( this.informe[i].parcial<this.piso){
                    this.piso= this.informe[i].parcial;
                }
            }
            this.values=[this.piso,this.techo];
            this.valores=this.valores.sort((a,b)=>a-b);
            console.log(this.valores);
             console.log("ruta 1");
        });
    }else{
        this.servicio.GetInfVentasByVendedor(this.fechaIncial.toISOString().split("T")[0],this.fechaFinal.toISOString().split("T")[0]).subscribe(resp=>{
            console.log(resp);
            this.informeVendedores=resp;
            console.log("ruta 2");
            console.log(this.informeVendedores.length);
             for(let i =0;i< this.informeVendedores.length;i++){
                this.valores.push( this.informeVendedores[i].parcial);
                this.labels.push( this.informeVendedores[i].sellername);
                if( this.informeVendedores[i].parcial>this.techo){
                    this.techo= this.informeVendedores[i].parcial;
                }
                if( this.informeVendedores[i].parcial<this.piso){
                    this.piso= this.informeVendedores[i].parcial;
                }
            }
            this.values=[this.piso,this.techo];
            this.valores=this.valores.sort((a,b)=>a-b);
            console.log(this.valores);
       });
    }

  }

  ngOnInit(): void {

    console.log("piso: "+this.piso+"  techo: "+this.techo+" valores: "+this.valores.length);

    this.values=[this.piso,this.techo];
    this.data = {
        labels: this.labels,
        datasets: [
            {
                data: this.valores,
                backgroundColor:   this.backgroundColor,
                borderColor:this.borderColor
            }
        ]
    };

  }

  public filtrar(){


    //this.data["datasets"][0].data=[];//Object.assign(test[0].data,[]);

    this.data["datasets"][0].data=this.valores;
    var seleccionados=[];
    var labels=[];

    for(let d of this.data["datasets"][0].data){
      if(Number(d)>= this.values[0] && Number(d)<=this.values[1]){
        const indice =this.data["datasets"][0].data.indexOf(d);
        seleccionados.push(d);
        labels.push(this.labels[indice]);
      }
    }

    this.data = {
        labels: labels,
        datasets: [
            {
                data:seleccionados,
                backgroundColor:  this.backgroundColor,
                borderColor:this.borderColor
            }
        ],

    };
    // this.displayData[0].data= Object.assign([],seleccionados);
    // this.displayChartLabels = Object.assign([], labels)

  }
  userSelect(){}
  public  agreagar (){

  }
   backgroundColor:any= [
    'rgba(255, 199, 44, 0.7)',
    'rgba(0, 76, 175, 0.7)',
    'rgba(139, 255, 255, 0.7)',
    'rgba(129, 161, 27, 0.7)',
    'rgba(255, 173, 255, 0.7)',
    'rgba(255, 255, 157, 0.7)',
    'rgba(159, 232, 112, 0.7)',
    'rgba(237, 69, 24, 0.7)',
    'rgba(252, 143, 82, 0.7)',
    'rgba(122, 97, 174, 0.7)',
    'rgba(0, 121, 255, 0.7)',
    'rgba(32, 218, 168, 0.7)',
    'rgba(0, 177, 171, 0.7)',
    'rgba(255, 77, 119, 0.7)',
    'rgba(13, 117, 5, 0.7)',
    'rgba(8, 191, 255, 0.7)',
    'rgba(255, 107, 134, 0.7)',
    'rgba(255, 0, 180, 0.7)',
    'rgb(215, 12, 51, 0.7)',
  ];

  borderColor:any= [
    'rgb(255, 199, 44)',
    'rgb(0, 76, 175)',
    'rgb(139, 255, 255)',
    'rgb(129, 161, 27)',
    'rgb(255, 173, 255)',
    'rgb(255, 255, 157)',
    'rgb(159, 232, 112)',
    'rgb(237, 69, 24)',
    'rgb(252, 143, 82)',
    'rgb(122, 97, 174)',
    'rgb(0, 121, 255)',
    'rgb(32, 218, 168)',
    'rgb(0, 177, 171)',
    'rgb(255, 77, 119)',
    'rgb(13, 117, 5)',
    'rgb(8, 191, 255)',
    'rgb(255, 107, 134)',
    'rgb(255, 0, 180)',
    'rgb(215, 12, 51)',
  ];
  options:any={
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  }
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Informe } from 'src/app/api/informe';
import { InformeService } from '../../../service/informe.service';

@Component({
  selector: 'app-informe-ventas',
  templateUrl: './informe-ventas.component.html',
  styleUrls: ['./informe-ventas.component.scss']
})
export class InformeVentasComponent implements OnInit {
  rutas: MenuItem[];
  servicio: InformeService;
  informes:Informe[];
  fechaIncial:Date=new Date("2011-06-08");
  fechaFinal:Date=new Date("2022-06-08");

  constructor(informeVentas:InformeService ) {
    this.servicio= informeVentas;
    // this.servicio.GetSeguimientoPorVendedor(this.fechaIncial.toISOString().split("T")[0],this.fechaFinal.toISOString().split("T")[0]).subscribe(resp=>{
    //      this.informes=resp;
    //      console.log("si pase");
    //      console.log(resp);
    // });
    // console.log(this.fechaIncial.toISOString().split("T")[0]);
  }

  ngOnInit(): void {
    this.rutas = [
        { icon: "pi pi-home",routerLink: ['/admin/uikit/dashboard'] },
        { label: "Tipos de Evento" },
      ];
  }

}

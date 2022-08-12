import { Component, OnInit, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Informe } from 'src/app/api/informe';
import { InformeService } from '../../../service/informe.service';

@Component({
  selector: 'app-informe-ventas',
  templateUrl: './informe-ventas.component.html',
  styleUrls: ['./informe-ventas.component.scss']
})
/**
 * Se encarga de mostrar los informes de ventas por producto y vendedor
 */
export class InformeVentasComponent implements OnInit {
  rutas: MenuItem[];
  servicio: InformeService;
  informes:Informe[];
  porProducto:Number=0;
  porVendedor:Number=1;
  @Output() fechaIncial:Date=new Date("2011-06-08");
  @Output() fechaFinal:Date=new Date("2022-06-08");

  constructor(informeVentas:InformeService ) {
    this.servicio= informeVentas;
  }

  ngOnInit(): void {

    this.rutas = [
        { icon: "pi pi-home",routerLink: ['/admin/uikit/dashboard'] },
        { label: "Informe de ventas" },
      ];
  }
  cambio(){
    console.log("se supone que cambia");
    sessionStorage.setItem("selector",this.porProducto.toString());
  }

}

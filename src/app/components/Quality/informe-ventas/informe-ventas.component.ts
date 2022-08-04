import { Component, OnInit, Input, Output } from '@angular/core';
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
  @Output() porProducto:Number=1;
  @Output() porVendedor:Number=2;
  @Output() fechaIncial:Date=new Date("2011-06-08");
  @Output() fechaFinal:Date=new Date("2022-06-08");

  constructor(informeVentas:InformeService ) {
    this.servicio= informeVentas;
    console.log(this.porProducto);
    console.log(this.porVendedor);
  }

  ngOnInit(): void {
    this.rutas = [
        { icon: "pi pi-home",routerLink: ['/admin/uikit/dashboard'] },
        { label: "Informe de ventas" },
      ];
  }

}

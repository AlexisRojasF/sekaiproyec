import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { VentasService } from '../../../service/ventas.service';
import { Ventas } from '../../../api/ventas';
import { Vendedor } from '../../../api/vendedor';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
})
export class VentasComponent implements OnInit {

    rutas: MenuItem[];
    ventas: Ventas[]=[];
    vendedores: Vendedor[]=[];
    vendedorSeleccionado: Vendedor;
    ventaSeleccionada: Ventas;

    servicio: VentasService;
    fechaIncial:Date=new Date("2011-06-08");
    fechaFinal:Date=new Date();
    limitarBusqueda:Boolean=true;

  constructor(servicioVentas:VentasService ) {
    this.servicio= servicioVentas;
    this.servicio.getListaVendedores().subscribe(resp=>{
         this.vendedores=resp;
         console.log("si pase");
    });
    console.log("en construccion:"+this.vendedores.length);
    if(this.vendedores.length>0){
        this.vendedorSeleccionado=this.vendedores[0];
    }

  }

  ngOnInit(): void {
    this.rutas = [
        { icon: "pi pi-home",routerLink: ['/admin/uikit/dashboard'] },
        { label: "Documentos" },
        { label: "Ventas" },
      ];
  }

  async boton():Promise<void>{

  }

  async buscar():Promise<void>{
    this.servicio.GetVentasPorFecha(this.fechaIncial.toISOString().split('T')[0],this.fechaFinal.toISOString().split('T')[0]).subscribe(resp=> {
        this.ventas = resp;
    });
  }
}

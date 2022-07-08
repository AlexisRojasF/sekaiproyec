import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CatalogosService } from '../../../service/catalogos.service';
import { Catalogo } from 'src/app/api/catalogo';

@Component({
  selector: 'app-catalogos-ventas',
  templateUrl: './catalogos-ventas.component.html',
  styleUrls: ['./catalogos-ventas.component.scss']
})
export class CatalogosVentasComponent implements OnInit {
    catalogos:Catalogo[]=[];
    catalogoSeleccionado: Catalogo;
    rutas:MenuItem[];
    servicio:CatalogosService;

    constructor(servicioVentas:CatalogosService ) {
        this.servicio= servicioVentas;
        this.servicio.GetAllCatalogs().subscribe(resp=>{
             this.catalogos=resp;
             console.log("si pase");
             console.log(resp);
        });
        console.log("en construccion:"+this.catalogos.length);
        if(this.catalogos.length>0){
            this.catalogoSeleccionado=this.catalogos[0];
        }

      }

  ngOnInit(): void {
    this.rutas = [
        { icon: "pi pi-home",routerLink: ['/admin/uikit/dashboard']  },
        { label: "Catalogos de Venta" },
      ];
  }

  seleccionarCatalogo(catalogo:any){
    this.catalogoSeleccionado=catalogo;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Producto } from '../../../api/producto';

@Component({
  selector: 'app-productos-desc',
  templateUrl: './productos-desc.component.html',
  styleUrls: ['./productos-desc.component.scss']
})
export class ProductosDescComponent implements OnInit {
  producto:Producto;
  subTotal: number;
  rutas: MenuItem[];
  resumen: String[]=[];
  constructor() {
   this.producto=JSON.parse(sessionStorage.getItem('producto'));
  }

  ngOnInit(): void {
    this.resumen =[
        '[]'
    ];
    this.rutas = [
        { icon: "pi pi-home",routerLink: ['/admin/uikit/dashboard']  },
        { label: "Productos",routerLink:['/admin/productos'] },
        { label: "Detalles" },
    ];
    console.log(this.producto);
  }


}

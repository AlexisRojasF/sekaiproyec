import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Customer } from 'src/app/api/customer';

@Component({
  selector: 'app-ventas-desc',
  templateUrl: './ventas-desc.component.html',
  styleUrls: ['./ventas-desc.component.scss']
})
export class VentasDescComponent implements OnInit {
  customers1: Customer[];
  rutas: MenuItem[];
  LetrasNumero:String;
  subTotal: number;
  resumen: String[];

  constructor() { }

  ngOnInit(): void {
    this.rutas = [
        { icon: "pi pi-home" },
        { label: "Documentos" },
        { label: "Ventas" },
        { label: "Detalles"}
      ];
      this.LetrasNumero='mil'
      this.subTotal=0;
      this.resumen =[
          '1'
      ]
  }

  boton():void{}
}

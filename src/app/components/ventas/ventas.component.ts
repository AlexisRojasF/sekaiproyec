import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Customer } from '../../api/customer';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
})
export class VentasComponent implements OnInit {
    customers1: Customer[];
    rutas: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.rutas = [
        { icon: "pi pi-home" },
        { label: "Documentos" },
        { label: "Ventas" },
      ];
  }

  boton():void{}
}

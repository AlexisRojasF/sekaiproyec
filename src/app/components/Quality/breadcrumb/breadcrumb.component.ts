import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

/**
 * Componente para agregar el acceso rapido al menu de migas de pan 
 */
export class BreadcrumbComponent implements OnInit {
  @Input() rutas:MenuItem[];
  constructor() { }

  ngOnInit(): void {

  }

}

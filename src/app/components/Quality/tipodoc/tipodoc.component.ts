import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from '../../../api/tipo-documento';
import { TipoDocumentoService } from '../../../service/tipo-documento.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tipodoc',
  templateUrl: './tipodoc.component.html',
  styleUrls: ['./tipodoc.component.scss']
})
export class TipodocComponent implements OnInit {
    rutas: MenuItem[];
    tipoDocumentoList:TipoDocumento[]=[];
    tipoDocSeleccionado:TipoDocumento;
    servicio:TipoDocumentoService;
  constructor(servicioTipoDocumento:TipoDocumentoService) {
    this.servicio= servicioTipoDocumento;
    this.servicio.getListaTipoDocumento().subscribe(resp=>{
         this.tipoDocumentoList=resp;
         console.log("si pase");
         console.log(resp);
    });
  }

  ngOnInit(): void {
    this.rutas = [
        { icon: "pi pi-home",routerLink: ['/admin/uikit/dashboard'] },
        { label: "Tipos de Documentos" },
      ];
  }

}

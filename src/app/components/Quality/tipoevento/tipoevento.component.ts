import { Component, OnInit } from '@angular/core';
import { TipoEvento } from '../../../api/tipo-evento';
import { TipoEventoService } from '../../../service/tipo-evento.service';
import { MenuItem } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipoevento',
  templateUrl: './tipoevento.component.html',
  styleUrls: ['./tipoevento.component.scss']
})
export class TipoeventoComponent implements OnInit {
  tipoEventoList: TipoEvento[]=[];
  tipoEventoSeleccionado: TipoEvento=null;
  desplegarModal: boolean=false;
  eliminarModal: boolean=false;
  servicio: TipoEventoService;
  rutas: MenuItem[];

  constructor(servicioTipoEvento:TipoEventoService,private fb:FormBuilder) {
    this.servicio= servicioTipoEvento;
    this.servicio.getListaTipoEvento().subscribe(resp=>{
         this.tipoEventoList=resp;
         console.log("si pase");
         console.log(resp);
    });
   }

  ngOnInit(): void {
    this.rutas = [
        { icon: "pi pi-home",routerLink: ['/admin/uikit/dashboard'] },
        { label: "Tipos de Evento" },
      ];
  }

  agregar(){
    this.desplegarModal=true;
  }

  editar(){
    if(this.tipoEventoSeleccionado==null)return
    else{
        this.desplegarModal=true;
        this.Form.controls['tpecodigo'].setValue(this.tipoEventoSeleccionado.tpecodigo);
        this.Form.controls['tpenombre'].setValue(this.tipoEventoSeleccionado.tpenombre);
    }
  }

  eliminar(){
    if(this.tipoEventoSeleccionado==null)return
    else{
        this.eliminarModal=true;
    }
  }

  eliminacionTPE(){
    this.servicio.deleteTipoEvento(this.tipoEventoSeleccionado).subscribe(resp=>{
        console.log("si pase");
        console.log(resp);
        this.eliminarModal=false;
        window.location.reload();
    });
  }

  enviar(){
    this.desplegarModal=false;
    this.Form.controls['tpetipo'].setValue('VN');
    this.Form.controls['tpeactivo'].setValue(1);
    console.log(this.Form.value);
    this.servicio.newTipoEvento(this.Form.value).subscribe(resp=>{
        console.log("si pase");
        console.log(resp);
    });;
    window.location.reload();
  }

  select(tipoEvento:any){
    this.tipoEventoSeleccionado=tipoEvento;
  }

  seleccionado():boolean{
    return this.tipoEventoSeleccionado==null;
  }

  consultaDetalles(){
    if(this.tipoEventoSeleccionado==null)return
    else{
        this.desplegarModal=true;
    }
  }

  Form:FormGroup = this.fb.group({
    tpecodigo:['',[Validators.required]],
    tpenombre:['',[Validators.required]],
    tpetipo:['',[Validators.required]],
    tpeactivo:[0,[Validators.required]],
  });
}

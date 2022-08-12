import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { Festivo } from '../../../api/festivo';
import { FestivoService } from '../../../service/festivo.service';
import esLocale from '@fullcalendar/core/locales/es';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-festivos',
  templateUrl: './festivos.component.html',
  styleUrls: ['./festivos.component.scss']
})

export class FestivosComponent implements OnInit {
    rutas: MenuItem[];
    festivos:Festivo[]=[];
    eventos:any=[];
    festServ:FestivoService;
    FestivoDialog:boolean=false;
    fechaSeleccionada:any;


    calendarOptions: CalendarOptions = {
        locale: esLocale,
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick.bind(this),
    };
    constructor(fest:FestivoService) {
        this.festServ=fest;
    }

    ngOnInit(): void {
        this.festServ.GetAllFestivos().subscribe(resp =>{
            this.festivos=resp;
            console.log(this.festivos.length);
            this.buildFestivosAsEvents();
            this.calendarOptions.events=this.eventos;
            console.log(this.calendarOptions.events);
        });

        this.rutas = [
            { icon: "pi pi-home",routerLink: ['/admin/uikit/dashboard'] },
            { label: "Festivos" },
          ];

    }
    /**
     * Maneja el click en un dia del calendario
     * @param arg referencia al dia que fue cliqueado
     */
    handleDateClick(arg) {
        this.cambiar();
        this.fechaSeleccionada=arg.dateStr;
    }

    /**
     * Lee la lista de festivos recibida del backend procesandola para cargarlos en el calendario como domingo o festivos
     */
    buildFestivosAsEvents(){
        console.log("construyendo eventos");
        for(let i=0;i<this.festivos.length;i++){
           let evento= {
                title: this.festivos[i].sdfclase.trim()=='f'?'Festivo':'Domingo',
                start: this.festivos[i].sdffecha,
                end: this.festivos[i].sdffecha,
                color:this.festivos[i].sdfclase.trim()=='f'?"red":"blue",
            }
            this.eventos.push(evento);
        }

    }
    /**
     * Metodo encargado de llamar al servicio de registro de nuevos festivos,
     */
    enviar(){
        let date= new Date(this.fechaSeleccionada).getDay();
        let evento= {
            title: date==6?'Domingo':'Festivo',
            start: this.fechaSeleccionada,
            end: this.fechaSeleccionada,
            color:date==6?"blue":"red",
        }

        let festivo:Festivo={
            sdffecha: this.fechaSeleccionada,
            sdfclase: date==6?'d':'f',
        };

        this.festServ.newFestivo(festivo).subscribe(resp=>{
            this.eventos.push(evento);
            this.calendarOptions.events=this.eventos;
            console.log(this.calendarOptions.events);
            this.cambiar();
        });
    }
    /**
     * controla si se despliega propt de confirmacion de creacion de un festivo
     */
    cambiar(){
        this.FestivoDialog=!this.FestivoDialog;
    }
}

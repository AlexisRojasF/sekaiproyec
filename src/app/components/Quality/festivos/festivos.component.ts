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
            { label: "Documentos" },
            { label: "Ventas" },
          ];

    }

    handleDateClick(arg) {

        let date= new Date(arg.dateStr).getDay();
        let evento= { // this object will be "parsed" into an Event Object
            title: date==6?'Domingo':'Festivo', // a property!
            start: arg.dateStr, // a property!
            end: arg.dateStr, // a property! ** see important note below about 'end' **
            color:"red",
        }
        this.eventos.push(evento);
        console.log(this.eventos.length);
        this.calendarOptions.events=this.eventos;
        console.log(this.calendarOptions.events);
        alert("desea marcar como dia no laboral "+arg.dateStr+" ?");

        //this.calendarOptions.
    }

    buildFestivosAsEvents(){
        console.log("construyendo eventos");
        for(let i=0;i<this.festivos.length;i++){
           let evento= { // this object will be "parsed" into an Event Object
                title: this.festivos[i].sdfclase.trim()=='f'?'Festivo':'Domingo', // a property!
                start: this.festivos[i].sdffecha, // a property!
                end: this.festivos[i].sdffecha, // a property! ** see important note below about 'end' **
                color:"red",
            }
            this.eventos.push(evento);
        }

    }
}

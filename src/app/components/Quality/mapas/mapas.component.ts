import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Marcador } from 'src/app/api/marcador';
import { SeguimientoService } from '../../../service/seguimiento.service';
import { Seguimiento } from '../../../api/seguimiento';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.scss']
})
export class MapasComponent implements OnInit {
  rutas: MenuItem[];
  marcadores: Marcador[]=[];
  seguimientos:Seguimiento[]=[];

  servicio:SeguimientoService;
  fechaIncial:Date=new Date("2011-06-08");
  fechaFinal:Date=new Date();


  polylineOptions = {
    path: [],
    strokeColor: '#32a1d0',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  };
  lat= 4.08466;
  lng= -76.19536;
  center: google.maps.LatLngLiteral = {lat: this.lat, lng: this.lng};
  zoom = 12;
  markerOptions: google.maps.MarkerOptions = {draggable: false, title: "Marcador de prueba",clickable:true};
  markerPositions: google.maps.LatLngLiteral[] = [];
  heatmapOptions = {path: [],radius: 25};
  mapaDeCalorActivo= true;
  rutaActiva=true;


  @ViewChild(MapInfoWindow) infoWindow?: MapInfoWindow;
  /**
   * Permite agregar marcadores mediante el uso del raton
   * @param event
   */
  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }


  constructor(seguimiento:SeguimientoService) {
    this.servicio=seguimiento;
    console.log(this.fechaIncial.toISOString().split("T")[0]+"00:00:00");
    this.servicio.GetSeguimientoPorVendedor(this.fechaIncial.toISOString().split("T")[0]+" 00:00:00",this.fechaFinal.toISOString().split("T")[0]+" 23:59:59", '01').subscribe(resp=>{
        this.seguimientos=resp;
        this.seguimientos.forEach(element => {
            this.agregarMarcador(Number.parseFloat(element.gpslatitud),Number.parseFloat(element.gpslongitu));
            this.polylineOptions = {
                path: this.markerPositions,
                strokeColor: '#32a1d0',
                strokeOpacity: 1.0,
                strokeWeight: 2,
              };
            this.heatmapOptions = {path: this.markerPositions,radius: 25};
        });
    });

   }

  ngOnInit(): void {
    this.rutas = [
        { icon: "pi pi-home",routerLink: ['/admin/uikit/dashboard'] },
        { label: "Documentos" },
        { label: "Ventas" },
      ];
  }
  
  /**
   *toma un set de coordenadas y crea un marcador agregable para el mapa
   * @param latitud
   * @param longitud
   */
  agregarMarcador(latitud:number, longitud:number){
    const newMarker:google.maps.LatLngLiteral= {lat:latitud,lng: longitud};
    this.markerPositions.push(newMarker);
  }

  /**
   * permite cambiar el estado de activacion del mapa de calor
   */
  alternarMapaCalor(){
    this.mapaDeCalorActivo= !this.mapaDeCalorActivo;
  }

  /**
   * Permite activar y desactivar el trazado de la ruta aproximada
   */
  activarRuta(){
    this.rutaActiva= !this.rutaActiva;
  }

  /**
   * Maneja el evento de consulta de informacion para un marcador
   * @param marker marcador a consultar
   */
  openInfoWindow(marker: MapMarker) {
    this.infoWindow?.open(marker);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Marcador } from 'src/app/api/marcador';
import { SeguimientoService } from '../../../service/seguimiento.service';
import { Seguimiento } from '../../../api/seguimiento';
import { MenuItem } from 'primeng/api';
import { Vendedor } from '../../../api/vendedor';
import { VentasService } from '../../../service/ventas.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.scss']
})
export class MapasComponent implements OnInit {
  rutas: MenuItem[];
  marcadores: Marcador[]=[];
  seguimientos:Seguimiento[]=[];
  horaInicial: String="5:00:00";
  horaFinal: String="22:00:00";
  servicio:SeguimientoService;
  fechaIncial:Date=new Date("2011-06-08");
  fechaFinal:Date=new Date();
  vendedores: Vendedor[]=[];
  vendedorSeleccionado: Vendedor;
  consulta:String;
  lat= 4.08466;
  lng= -76.19536;
  center: google.maps.LatLngLiteral = {lat: this.lat, lng: this.lng};
  zoom = 12;
  markerOptions: google.maps.MarkerOptions = {draggable: false, title: "Marcador de prueba",clickable:true};
  markerPositions: google.maps.LatLngLiteral[] = [];
  heatmapOptions = {path: [],radius: 25};
  mapaDeCalorActivo= true;
  rutaActiva=true;
  horas=["5:00:00","6:00:00","7:00:00","8:00:00","9:00:00","10:00:00","11:00:00","12:00:00","13:00:00","14:00:00","15:00:00","16:00:00","17:00:00","18:00:00","19:00:00","20:00:00","21:00:00","22:00:00"];
  consultas=["Pedidos","Eventos","Seguimiento"]
  tiposRuta=["Lineal"];
  tipoRuta="";
  animaciones=["Sin Animacion","Con Animacion"];
  animacion

  polylineOptions = {
    path: [],
    strokeColor: '#32A1D0',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  };

  @ViewChild(MapInfoWindow) infoWindow?: MapInfoWindow;

  constructor(seguimiento:SeguimientoService,servicioVentas:VentasService) {
    this.servicio=seguimiento;
    servicioVentas.getListaVendedores().subscribe(resp=>{
        this.vendedores=resp;
        console.log("si pase");
        if(this.vendedores.length>0){
            this.vendedorSeleccionado=this.vendedores[0];
        }
    });
   }

  ngOnInit(): void {
    this.rutas = [
        { icon: "pi pi-home",routerLink: ['/admin/uikit/dashboard'] },
        { label: "Seguimiento" },
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

  /**
   * Usa la configuracion del usuario para realizar una busqueda
   */
  buscar(){
    let tipo= this.consulta=='Seguimiento'?0:this.consulta=='Pedidos'?1:2;
    //this.agregarMarcador(this.lat,this.lng);
    let newCenter=0;
    this.markerPositions=[];
    this.servicio.GetSeguimientoPorVendedor(this.fechaIncial.toISOString().split("T")[0]+" "+this.horaInicial,this.fechaFinal.toISOString().split("T")[0]+" "+this.horaFinal, this.vendedorSeleccionado.vencodigo,tipo).subscribe(resp=>{
        this.seguimientos=resp;
        this.seguimientos.forEach(element => {
            if(newCenter==0){
              this.center= {lat: Number(element.gpslatitud), lng: Number(element.gpslongitu)};
              newCenter++;
            }
            this.agregarMarcador(Number.parseFloat(element.gpslatitud),Number.parseFloat(element.gpslongitu));
        });
        this.polylineOptions = {
            path: this.markerPositions,
            strokeColor: '#32A1D0',
            strokeOpacity: 1.0,
            strokeWeight: 2,
          };
        this.heatmapOptions = {path: this.markerPositions,radius: 25};
    });
  }

  /**
   * Permite agregar marcadores mediante el uso del raton
   * @param event
   */
   addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

}

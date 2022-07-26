import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Marcador } from 'src/app/api/marcador';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.scss']
})
export class MapasComponent implements OnInit {
  marcadores: Marcador[]=[];
  lat= 4.08466;
  lng= -76.19536;
  center: google.maps.LatLngLiteral = {lat: this.lat, lng: this.lng};
  zoom = 13;
  markerOptions: google.maps.MarkerOptions = {draggable: false, title: "Marcador de prueba",clickable:true};
  markerPositions: google.maps.LatLngLiteral[] = [];
  heatmapOptions = {radius: 25};
  mapaDeCalorActivo= false;
  rutaActiva=true;

  @ViewChild(MapInfoWindow) infoWindow?: MapInfoWindow;

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }


  constructor() {
    const nuevoMarcador= new Marcador(this.lat,  this.lng);
    this.marcadores.push(nuevoMarcador)
    this.markerPositions.push(this.center)
    this.agregarMarcador(4.07,-76.19);
    this.agregarMarcador(4.075,-76.192);
    this.agregarMarcador(4.090667, -76.207750);
    this.agregarMarcador(4.093392, -76.206286);
    this.agregarMarcador(4.095124, -76.204136);
    this.agregarMarcador(4.098665, -76.204700);
   }

  ngOnInit(): void {
  }

  agregarMarcador(latitud:number, longitud:number){
    const newMarker:google.maps.LatLngLiteral= {lat:latitud,lng: longitud};
    this.markerPositions.push(newMarker);
  }
  alternarMapaCalor(){
    this.mapaDeCalorActivo= !this.mapaDeCalorActivo;
  }
  activarRuta(){
    this.rutaActiva= !this.rutaActiva;
  }
  openInfoWindow(marker: MapMarker) {
    this.infoWindow?.open(marker);
  }

}

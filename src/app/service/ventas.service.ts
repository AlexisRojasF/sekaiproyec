import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Ventas } from '../api/ventas';
import { Vendedor } from '../api/vendedor';
import { DetalleVentas } from '../api/detalle-ventas';


@Injectable({
    providedIn: 'root'
})
export class VentasService {

    url = environment.apiUrl;
    headers: HttpHeaders;
    ventas:Ventas[];

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Acess-Control-Allow-Origin', '*');
        this.headers = this.headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        this.headers = this.headers.append( 'Content-Type', 'application/json');
    }

    GetVentasPorFecha(fechaInicial:string,fechaFinal:string): Observable<Ventas[]> {
        const url: string = `${this.url}ventas/fechas`;

        const body = {
            pedfechaInicio:fechaInicial,
            pedfechaFinal:fechaFinal
        }

        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.post<Ventas[]>(url,body,{'headers': this.headers });
    }

    getDetalleVenta(){
        const url: string = `${this.url}ventas/detalles`;
        const body = {
            numero:9651.00,
            ref:"PD09"
        }

        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.post<DetalleVentas>(url,body,{'headers': this.headers });
    }


    getListaVendedores(){
        const url: string = `${this.url}vendedor/lista-vendedores`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.get<Vendedor[]>(url,{'headers': this.headers });
    }
}

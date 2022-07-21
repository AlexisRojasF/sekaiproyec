import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Seguimiento } from '../api/seguimiento';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {

    url = environment.apiUrl;
    headers: HttpHeaders;
    ventas:Seguimiento[];

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Acess-Control-Allow-Origin', '*');
        this.headers = this.headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        this.headers = this.headers.append( 'Content-Type', 'application/json');
    }

    GetSeguimientoPorVendedor(fechaInicial: String, fechaFinal:String,vendedor:String ): Observable<Seguimiento[]> {
        const url: string = `${this.url}Seguimiento/vendedor/${vendedor}`;
        const body = {
            pedfechaInicio: fechaInicial,
            pedfechaFinal: fechaFinal
        }

        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.post<Seguimiento[]>(url,body,{'headers': this.headers });
    }
}

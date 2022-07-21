import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Informe } from '../api/informe';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InformeService {

    url = environment.apiUrl;
    headers: HttpHeaders;
    ventas:Informe[];

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Acess-Control-Allow-Origin', '*');
        this.headers = this.headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        this.headers = this.headers.append( 'Content-Type', 'application/json');
    }

    GetSeguimientoPorVendedor(fechaInicial: String, fechaFinal:String ): Observable<Informe[]> {
        const url: string = `${this.url}informes/ventas/prductos/01/001`;
        const body = {
            pedfechaInicio: fechaInicial,
            pedfechaFinal: fechaFinal
        }

        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.post<Informe[]>(url,body,{'headers': this.headers });
    }
}

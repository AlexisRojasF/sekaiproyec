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

    /**
     * Consulta el rastreo GPS creado por un vendedor, sea por su seguimiento, pedidos o eventos
     * @param fechaInicial
     * @param fechaFinal
     * @param vendedor vendedor a consultar
     * @param tipo selecciona el tipo de consulta, si tipo=0 se consultara por el seguimiento GPS del vededor, si tipo=1 los de pedidos y tipo=2 para eventos
     * @returns Listado de objetos de seguimiento del vendedor en cuestion
     */
    GetSeguimientoPorVendedor(fechaInicial: String, fechaFinal:String,vendedor:String, tipo:Number ): Observable<Seguimiento[]> {
        let seleccion= tipo==0?'vendedor':tipo==1?'pedidos':'eventos';
        console.log("tipo de busqueda: "+seleccion);
        const url: string = `${this.url}Seguimiento/${seleccion}/${vendedor}`;
        const body = {
            pedfechaInicio: fechaInicial,
            pedfechaFinal: fechaFinal
        }
        //console.log("consultando"+JSON.stringify(body));
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.post<Seguimiento[]>(url,body,{'headers': this.headers });
    }

}

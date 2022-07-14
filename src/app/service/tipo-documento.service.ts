import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TipoDocumento } from '../api/tipo-documento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

    url = environment.apiUrl;
    headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Acess-Control-Allow-Origin', '*');
        this.headers = this.headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        this.headers = this.headers.append( 'Content-Type', 'application/json');
    }

    getListaTipoDocumento(){
        const url: string = `${this.url}tipo-documento/all`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.get<TipoDocumento[]>(url,{'headers': this.headers });
    }

    
}

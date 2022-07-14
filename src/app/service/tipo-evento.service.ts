import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoEvento } from '../api/tipo-evento';

@Injectable({
  providedIn: 'root'
})
export class TipoEventoService {
    url = environment.apiUrl;
    headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Acess-Control-Allow-Origin', '*');
        this.headers = this.headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        this.headers = this.headers.append( 'Content-Type', 'application/json');
    }

    getListaTipoEvento(){
        const url: string = `${this.url}eventos/tipos-eventos`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.get<TipoEvento[]>(url,{'headers': this.headers });
    }

    newTipoEvento(body:any){
        const url: string = `${this.url}eventos/tipos-eventos`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.post<TipoEvento>(url,body,{'headers': this.headers });
    }

    deleteTipoEvento(evento:TipoEvento){
        const url: string = `${this.url}eventos/tipos-eventos/`+ evento.tpecodigo;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.delete<TipoEvento>(url,{'headers': this.headers});
    }

}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meta } from '../api/meta';


@Injectable({
  providedIn: 'root'
})
export class MetasService {
    url = environment.apiUrl;
    headers: HttpHeaders;
    ventas:Meta[];

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Acess-Control-Allow-Origin', '*');
        this.headers = this.headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        this.headers = this.headers.append( 'Content-Type', 'application/json');
    }

    GetAllMetasByModel(modelo:any): Observable<Meta[]> {
        const url: string = `${this.url}metas/info-metas/general/${modelo}`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.post<Meta[]>(url,{'headers': this.headers });
    }

    GetAllMetasByVendor(modelo:any, vendedor:any): Observable<Meta[]> {
        const url: string = `${this.url}metas/info-metas/general/${modelo+"/"+vendedor}`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.post<Meta[]>(url,{'headers': this.headers });
    }

    GetAllMetasByDay(modelo:any, empresa:any): Observable<Meta[]> {
        const url: string = `${this.url}metas/info-metas/diario/${modelo+"/"+empresa}`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.post<Meta[]>(url,{'headers': this.headers });
    }

    GetAllMetasByDayVolume(modelo:any, empresa:any): Observable<Meta[]> {
        const url: string = `${this.url}metas/info-metas/volumen/${modelo+"/"+empresa}`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.post<Meta[]>(url,{'headers': this.headers });
    }

    GetAllMetasByDayVolumeAndVendor(modelo:any, empresa:any, vendedor:any): Observable<Meta[]> {
        const url: string = `${this.url}metas/info-metas/volumen/${modelo+"/"+empresa+"/"+vendedor}`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.post<Meta[]>(url,{'headers': this.headers });
    }

    GetAllMetasByDayAndVendor(modelo:any, empresa:any, vendedor:any): Observable<Meta[]> {
        const url: string = `${this.url}metas/info-metas/diario/${modelo+"/"+empresa+"/"+vendedor}`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.post<Meta[]>(url,{'headers': this.headers });
    }

    GetAllMetas(): Observable<Meta[]> {
        const url: string = `${this.url}metas/all`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.get<Meta[]>(url,{'headers': this.headers });
    }

    GetAllMetasDetalle(): Observable<Meta[]> {
        const url: string = `${this.url}metas/dt-all`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.get<Meta[]>(url,{'headers': this.headers });
    }

    EditMeta() {
        const url: string = `${this.url}metas/editar`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        this.http.put(url,{'headers': this.headers });
    }

    EditMetaDetalle() {
        const url: string = `${this.url}metas/edit-dt`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        this.http.put(url,{'headers': this.headers });
    }

    DeleteMeta() {
        const url: string = `${this.url}metas/edit-dt`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        this.http.put(url,{'headers': this.headers });
    }
}

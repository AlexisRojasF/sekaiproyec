import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Catalogos } from '../components/table/interfaces/Usuario';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
    url = environment.apiUrl;
    headers: HttpHeaders;
    ventas:Catalogos[];

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Acess-Control-Allow-Origin', '*');
        this.headers = this.headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        this.headers = this.headers.append( 'Content-Type', 'application/json');
    }

    GetAllCatalogs(): Observable<Catalogos[]> {
        const url: string = `${this.url}CatalogosVenta/all`;

        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.get<Catalogos[]>(url,{'headers': this.headers });
    }
}

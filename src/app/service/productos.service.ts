import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../api/product';
import { environment } from '../../environments/environment';
import { Producto } from '../api/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

    url = environment.apiUrl;
    headers: HttpHeaders;
    ventas:Product[];

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Acess-Control-Allow-Origin', '*');
        this.headers = this.headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        this.headers = this.headers.append( 'Content-Type', 'application/json');
    }
    GetAllProductos(): Observable<Producto[]> {
        const url: string = `${this.url}productos/all`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.get<Producto[]>(url,{'headers': this.headers });
    }
    GetProductosCombo(id:any): Observable<Producto[]> {
        const url: string = `${this.url}productos/combos`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.get<Producto[]>(url,{'headers': this.headers });
    }
}

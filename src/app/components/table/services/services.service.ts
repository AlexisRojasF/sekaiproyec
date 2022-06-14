import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {ModelLoggin} from "../../login/interfaces/ModelLoggin";
import {Catalogos, Usuario} from "../interfaces/Usuario";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

    url = environment.apiUrl;
    headers: HttpHeaders;

  constructor(private http: HttpClient,) {
      this.headers = new HttpHeaders();
  }

    Usuarios():Observable<Usuario[]> {

      this.headers =this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        const url: string = `${this.url}users/usuario`;

        return this.http.get<Usuario[]>(url,{ 'headers': this.headers });
    }

    Catalogos():Observable<Catalogos[]> {

      this.headers =this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        const url: string = `${this.url}CatalogosVenta/all`;

        return this.http.get<Catalogos[]>(url,{ 'headers': this.headers });
    }



}

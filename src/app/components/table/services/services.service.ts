import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {ModelLoggin} from "../../login/interfaces/ModelLoggin";
import {Catalogos, Usuario} from "../interfaces/Usuario";
import {FormGroup} from "@angular/forms";

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

    CreateUsuario(user:FormGroup):Observable<Usuario>{
        this.headers =this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        const url: string = `${this.url}users/create`;

        return this.http.post<Usuario>(url,user,{ 'headers': this.headers });
    }

    DeleteUsuario(id:any):void{
        this.headers =this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        ///this.headers = this.headers.append( 'Content-Type', 'text/plain');
        const url: string = `${this.url}users/delete`;
        this.http.delete(url,{ 'headers': this.headers,'body':{id:id},'responseType':'text' }).subscribe({
            next(){
                console.log("pase");
            }
        });
        console.log("eliminado");
        
    }



}

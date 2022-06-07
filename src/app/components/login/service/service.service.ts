import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ModelLoggin} from "../interfaces/ModelLoggin";


@Injectable({
    providedIn: 'root'
})
export class ServiceService {

    url = environment.apiUrl;
    headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Acess-Control-Allow-Origin', '*');
        this.headers = this.headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }

    Loggin(usuario:string,password:string): Observable<ModelLoggin> {
        const url: string = `${this.url}oauth/token`;
       // const url: string = `https://dog.ceo/api/breeds/image/random`;
        const user: String = environment.user;
        const pass: String = environment.pass;

        const body = new URLSearchParams();
        body.set('username',usuario);
        body.set('password',password);
        body.set('grant_type','password');



        this.headers = this.headers.append('Authorization','Basic '+btoa(user + ':' + pass));


        return this.http.post<ModelLoggin>(url,body.toString(),{ 'headers': this.headers });
    }
}

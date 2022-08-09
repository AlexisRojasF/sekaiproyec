import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Festivo } from '../api/festivo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

    url = environment.apiUrl;
    headers: HttpHeaders;
    ventas:Festivo[];

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Acess-Control-Allow-Origin', '*');
        this.headers = this.headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        this.headers = this.headers.append( 'Content-Type', 'application/json');
    }
    GetAllFestivos(): Observable<Festivo[]> {
        const url: string = `${this.url}festivos/`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        return this.http.get<Festivo[]>(url,{'headers': this.headers });
    }

    newFestivo(festivo:Festivo): Observable<Festivo> {
        const url: string = `${this.url}festivos/`;
        this.headers = this.headers.append('Authorization','Bearer '+ sessionStorage.getItem('token'));
        const body = {
            "sdffecha": festivo.sdffecha,
            "sdfclase": festivo.sdfclase,
            "sdfnewuser": "ADM",
        }
        return this.http.post<Festivo>(url,body,{'headers': this.headers });
    }
}

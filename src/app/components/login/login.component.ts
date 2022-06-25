import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '../../service/app.config.service';
import { AppConfig } from '../../api/appconfig';
import { Subscription } from 'rxjs';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "./service/service.service";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[`
    :host ::ng-deep .p-password input {
    width: 100%;
    padding:1rem;
    }

    :host ::ng-deep .pi-eye{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent implements OnInit, OnDestroy {

  valCheck: string[] = ['remember'];

  password: string;


  config: AppConfig;

  subscription: Subscription;

  constructor(public configService: ConfigService ,private fb:FormBuilder,
              private service:ServiceService,
              private router:Router){ }

    Loggin:FormGroup = this.fb.group({
        usuario:['',[Validators.required]],
        password:['',[Validators.required]]
    })

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
  }

  ngOnDestroy(): void {
      if (this.subscription) {
          this.subscription.unsubscribe();
      }


  }

     async enviar() {


         const usuario:string= this.Loggin.controls['usuario'].value
         const password:string= this.Loggin.controls['password'].value

         await this.service.Loggin(usuario,password).toPromise().then(resp => {
             console.log(resp);
             sessionStorage.setItem('token',resp.access_token);
             sessionStorage.setItem('nombre',resp.nombre);
             this.router.navigate(['/admin/uikit/dashboard']);// '/admin/uikit/dashboar'
         },err => {
             console.log(err);
         })

    }

    validar(campo:string):string{

      if (this.Loggin.controls[campo].errors && this.Loggin.controls[campo].touched){

          return "ng-invalid ng-dirty";
      }

      return "";
    }

    validar2(campo:string):boolean{

        if (this.Loggin.controls[campo].errors && this.Loggin.controls[campo].touched){

            return true;
        }

        return false;
    }
}

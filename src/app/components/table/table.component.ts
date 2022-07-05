import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Customer, Representative } from '../../api/customer';
import { CustomerService } from '../../service/customerservice';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api'
import {ServicesService} from "./services/services.service";
import {Catalogos, tipoVendedor, Usuario} from "./interfaces/Usuario";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    templateUrl: './table.component.html',
    providers: [MessageService, ConfirmationService],
    styleUrls: ['../../../assets/demo/badges.scss'],
    styles: [`
        :host ::ng-deep  .p-frozen-column {
            font-weight: bold;
        }

        :host ::ng-deep .p-datatable-frozen-tbody {
            font-weight: bold;
        }

        :host ::ng-deep .p-progressbar {
            height:.5rem;
        }
    `]
})
export class TableComponent implements OnInit {


    representatives: Representative[];

    rowGroupMetadata: any;
    city:any;

    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    idFrozen: boolean = false;

    loading:boolean = true;

    selectUsuario:Usuario;

    submitted: boolean;

    usuarioDialog: boolean;

   usuarios:Usuario[]= [];
   usuarioSeleccionado:Usuario;
   catalogos:Catalogos[]= [];

   selectCatalogos:string[];

   tipoVendedores:tipoVendedor[];
   tipoVendedor:tipoVendedor;

   TipoDocumentos:String[]=[];

    @ViewChild('dt') table: Table;

    @ViewChild('filter') filter: ElementRef;

    constructor(private service:ServicesService,private fb:FormBuilder,
        private customerService: CustomerService) {


        this.service.Catalogos().subscribe(resp=> {
            this.catalogos = resp;
        },err=>{
            console.log(err);
        });

        this.tipoVendedores=[
            {name:'Vendedor',code:'VENDEDOR'},
            {name:'Adminitrador',code:'ADM'},
            {name:'Consultor',code:'CONSULTOR'},
        ];


    }

    Form:FormGroup = this.fb.group({
        usucodigo:['',[Validators.required]],
        usunombre:['',[Validators.required]],
        usucontra:['',[Validators.required]],
        usuvende:['',[Validators.required]],
        usudocumen:['',[Validators.required]],
        usutipo:['',[Validators.required]],
        usucatvent:['',[Validators.required]],
        usuvolumen:['',[Validators.required]],
        usuimprime:[0,[Validators.required]],
        usuactivo:[0,[Validators.required]],
        usubloqcat:[0,[Validators.required]],
        usucaraut:[0,[Validators.required]],
        usuagenda:[0,[Validators.required]],

    });


    enviar(){
        this.Form.controls['usucatvent'].setValue(this.Form.controls['usucatvent'].value.join("+"));
        this.Form.controls['usuimprime'].setValue(parseInt(this.Form.controls['usuimprime'].value.toString(),10));
        this.Form.controls['usuactivo'].setValue(parseInt(this.Form.controls['usuactivo'].value.toString(),10));
        this.Form.controls['usubloqcat'].setValue(parseInt(this.Form.controls['usubloqcat'].value.toString(),10));
        this.Form.controls['usucaraut'].setValue(parseInt(this.Form.controls['usucaraut'].value.toString(),10));
        console.log(this.Form.value);

        this.service.CreateUsuario(this.Form.value).subscribe(resp=>{
            console.log(resp);
        },err=>{
            console.log(err);
        });
        window.location.reload();
    }

    ngOnInit() {
        this.fillUserList();
    }

    onSort() {
        this.updateRowGroupMetaData();
    }

    openNew() {
        // @ts-ignore
        this.selectUsuario = {};
        this.submitted = false;
        this.usuarioDialog = true;
    }
    updateRowGroupMetaData() {
        this.rowGroupMetadata = {};

        if (this.usuarios) {
            for (let i = 0; i < this.usuarios.length; i++) {
                const rowData = this.usuarios[i];
                const representativeName = rowData.usunombre;

                if (i === 0) {
                    this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
                }
                else {
                    const previousRowData = this.usuarios[i - 1];
                    const previousRowGroup = previousRowData.usunombre;
                    if (representativeName === previousRowGroup) {
                        this.rowGroupMetadata[representativeName].size++;
                    }
                    else {
                        this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
                    }
                }
            }
        }
    }


    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }

    openEdit() {
        // @ts-ignore
        //this.selectUsuario = usuarioSeleccionado;
        this.submitted = false;
        this.usuarioDialog = true;
    }

    userDelete(){
        console.log(this.usuarios.indexOf(this.usuarioSeleccionado));
        this.service.DeleteUsuario(this.usuarioSeleccionado.usucodigo);
        window.location.reload();
    }

    userSelect(usuario:any){
        this.usuarioSeleccionado=usuario;
        console.log(this.usuarioSeleccionado);
    }

    fillUserList(){
        this.service.Usuarios().subscribe(resp => {
            console.log(resp)
            this.usuarios = resp;
            this.loading = false;

            this.usuarios.map(res => {
                this.TipoDocumentos.push(res.usudocumen);
            })

            this.TipoDocumentos= [...new Set(this.TipoDocumentos)];

        },error => {
            console.log(error)
        })
    }
}

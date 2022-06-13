import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Customer, Representative } from '../../api/customer';
import { CustomerService } from '../../service/customerservice';
import { Product } from '../../api/product';
import { ProductService } from '../../service/productservice';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api'
import {ServicesService} from "./services/services.service";
import {tipoVendedor, Usuario} from "./interfaces/Usuario";

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


    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    idFrozen: boolean = false;

    loading:boolean = true;

    selectUsuario:Usuario;

    submitted: boolean;

    usuarioDialog: boolean;

   usuarios:Usuario[]= [];

   tipoVendedores:tipoVendedor[];
   tipoVendedor:tipoVendedor;

    @ViewChild('dt') table: Table;

    @ViewChild('filter') filter: ElementRef;

    constructor(private service:ServicesService,
        private customerService: CustomerService) {

        this.tipoVendedores=[
            {name:'Vendedor',code:'VENDEDOR'},
            {name:'Adminitrador',code:'ADM'},
            {name:'Consultor',code:'CONSULTOR'},
        ];
    }

    ngOnInit() {

        this.service.Usuarios().subscribe(resp => {
            console.log(resp)
            this.usuarios = resp;
            this.loading = false;
        },error => {
            console.log(error)
        })




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
}

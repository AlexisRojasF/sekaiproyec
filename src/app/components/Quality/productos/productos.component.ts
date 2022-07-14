import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ProductosService } from '../../../service/productos.service';
import { Producto } from 'src/app/api/producto';
import { Router } from '@angular/router';
import { Combo } from '../../../api/combo';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})

export class ProductosComponent implements OnInit {

selectedProduct: Producto;
products: Producto[]=[];
rutas:MenuItem[];
servicio:ProductosService;
combo:Combo=null;


constructor(servicioProducto:ProductosService,private router: Router ) {
    this.servicio= servicioProducto;

    console.log("en construccion:"+this.products.length);
    if(this.products.length>0){
        this.selectedProduct=this.products[0];
    }

  }

  ngOnInit(): void {
    this.rutas = [
        { icon: "pi pi-home",routerLink: ['/admin/uikit/dashboard']  },
        { label: "Productos" },
      ];
    if(this.combo==null){
        this.servicio.GetAllProductos().subscribe(resp=>{
            this.products=resp;
        });
    }else{
        this.servicio.GetProductosCombo(this.combo.procodigo).subscribe(resp=>{
            this.products=resp;
        });
    }


  }
  
  userSelect(usuario:any){
    this.selectedProduct=usuario;
  }

  detalleProducto(){

    sessionStorage.setItem('producto',JSON.stringify(this.selectedProduct));
    this.router.navigate(['/admin/productos/desc'],{ queryParams: { producto: this.selectedProduct } })
  }

}

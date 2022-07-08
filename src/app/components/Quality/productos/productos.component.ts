import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ProductosService } from '../../../service/productos.service';
import { Producto } from 'src/app/api/producto';
import { Router } from '@angular/router';

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

constructor(servicioProducto:ProductosService,private router: Router ) {
    this.servicio= servicioProducto;
    this.servicio.GetAllProductos().subscribe(resp=>{
         this.products=resp;
         console.log("si pase");
         console.log(resp);
    });
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
  }

  userSelect(usuario:any){
    this.selectedProduct=usuario;
    console.log(this.selectedProduct);
  }

  detalleProducto(){
    console.log(this.selectedProduct);
    this.router.navigate(['/admin/productos/desc'],{ queryParams: { producto: this.selectedProduct } })
  }

}

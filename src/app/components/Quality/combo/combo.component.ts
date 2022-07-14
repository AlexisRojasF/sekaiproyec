import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Combo } from 'src/app/api/combo';
import { ComboService } from 'src/app/service/combo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss']
})
export class ComboComponent implements OnInit {
    selectedCombo: Combo;
    combos: Combo[]=[];
    rutas:MenuItem[];
    servicio:ComboService;

  constructor(servicioCombo:ComboService,private router: Router) {
    this.servicio= servicioCombo;
    this.servicio.getListaCombos().subscribe(resp=>{
         this.combos=resp;
         console.log("si pase");
         console.log(resp);
    });
  }

  ngOnInit(): void {
    this.rutas = [
        { icon: "pi pi-home",routerLink: ['/admin/uikit/dashboard']  },
        { label: "Combo" },
      ];
  }

  seleccionarCombo(combo:any){
    this.selectedCombo=combo;
  }

  productosCombo(){
    sessionStorage.setItem('combo',JSON.stringify(this.selectedCombo));
    this.router.navigate(['/admin/productos'])
  }
}

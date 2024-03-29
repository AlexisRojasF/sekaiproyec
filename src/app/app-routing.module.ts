import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormLayoutComponent } from './components/formlayout/formlayout.component';
import { PanelsComponent } from './components/panels/panels.component';
import { OverlaysComponent } from './components/overlays/overlays.component';
import { MediaComponent } from './components/media/media.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MiscComponent } from './components/misc/misc.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ChartsComponent } from './components/charts/charts.component';
import { FileComponent } from './components/file/file.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { AppMainComponent } from './app.main.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { TreeComponent } from './components/tree/tree.component';
import { CrudComponent } from './components/crud/crud.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { FloatLabelComponent } from './components/floatlabel/floatlabel.component';
import { InvalidStateComponent } from './components/invalidstate/invalidstate.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { IconsComponent } from './components/icons/icons.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AccessComponent } from './components/access/access.component';
import { VentasComponent } from './components/Quality/ventas/ventas.component';
import { VentasDescComponent } from './components/Quality/ventas-desc/ventas-desc.component';
import { ProductosComponent } from './components/Quality/productos/productos.component';
import { ProductosDescComponent } from './components/Quality/productos-desc/productos-desc.component';
import { CatalogosVentasComponent } from './components/Quality/catalogos-ventas/catalogos-ventas.component';
import { ComboComponent } from './components/Quality/combo/combo.component';
import { TipodocComponent } from './components/Quality/tipodoc/tipodoc.component';
import { TipoeventoComponent } from './components/Quality/tipoevento/tipoevento.component';
import { InformeVentasComponent } from './components/Quality/informe-ventas/informe-ventas.component';
import { MapasComponent } from './components/Quality/mapas/mapas.component';
import { MetasComponent } from './components/Quality/metas/metas.component';
import { FestivosComponent } from './components/Quality/festivos/festivos.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'admin', component: AppMainComponent,
                children: [
                    {path: 'uikit/dashboard', component: DashboardComponent},
                    {path: 'uikit/formlayout', component: FormLayoutComponent},
                    {path: 'uikit/input', component: InputComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateComponent},
                    {path: 'uikit/button', component: ButtonComponent},
                    {path: 'uikit/table', component: TableComponent},
                    {path: 'uikit/list', component: ListComponent},
                    {path: 'uikit/tree', component: TreeComponent},
                    {path: 'uikit/panel', component: PanelsComponent},
                    {path: 'uikit/overlay', component: OverlaysComponent},
                    {path: 'uikit/media', component: MediaComponent},
                    {path: 'uikit/menu', loadChildren: () => import('./components/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'uikit/message', component: MessagesComponent},
                    {path: 'uikit/misc', component: MiscComponent},
                    {path: 'uikit/charts', component: ChartsComponent},
                    {path: 'uikit/file', component: FileComponent},
                    {path: 'pages/crud', component: CrudComponent},
                    {path: 'pages/timeline', component: TimelineComponent},
                    {path: 'pages/empty', component: EmptyComponent},
                    {path: 'icons', component: IconsComponent},
                    {path: 'blocks', component: BlocksComponent},
                    {path: 'documentation', component: DocumentationComponent},
                    {path:'ventas', component: VentasComponent},
                    {path:'ventas/desc',component:VentasDescComponent},
                    {path:'productos', component: ProductosComponent},
                    {path:'productos/desc', component: ProductosDescComponent},
                    {path:'catalogos', component: CatalogosVentasComponent},
                    {path:'combos',component:ComboComponent},
                    {path:'tipoDoc',component:TipodocComponent},
                    {path:'tipoEve',component:TipoeventoComponent},
                    {path:'informes',component: InformeVentasComponent},
                    {path:'mapas',component:MapasComponent},
                    {path:'metas',component:MetasComponent},
                    {path:'festivos',component:FestivosComponent}
                ],
            },
            {path:'pages/landing', component: LandingComponent},
            {path:'login', component: LoginComponent},
            {path:'pages/error', component: ErrorComponent},
            {path:'pages/notfound', component: NotfoundComponent},
            {path:'pages/access', component: AccessComponent},
            { path: "", redirectTo: "login", pathMatch: "full" },
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from "./components/inicio/inicio.component";
import { BusquedaComponent } from "./components/busqueda/busqueda.component";
import { FuturoComponent } from "./components/futuro/futuro.component";

const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'inicio', component: InicioComponent},
    {path: 'buscar', component: BusquedaComponent},
    {path: 'futuro', component: FuturoComponent},
    {path: '**', component: InicioComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
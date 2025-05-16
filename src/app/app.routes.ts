import { Routes } from '@angular/router';
import { CarteleraComponent } from './views/cartelera/cartelera.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { HistoriaComponent } from './views/historia/historia.component';
import { UbicacionComponent } from './views/ubicacion/ubicacion.component';
import { TaquillaComponent } from './views/taquilla/taquilla.component';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: InicioComponent},
    {path: 'cartelera', component: CarteleraComponent},
    {path: 'historia', component: HistoriaComponent},
    {path: 'ubicacion', component: UbicacionComponent},
    {path: 'taquilla', component: TaquillaComponent}

];

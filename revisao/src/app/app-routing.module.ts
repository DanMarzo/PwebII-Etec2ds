import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CachorroComponent } from './components/cachorro/cachorro.component';
import { CoelhoComponent } from './components/coelho/coelho.component';
import { GatoFofoComponent } from './components/gato-fofo/gato-fofo.component';
import { HomeComponent } from './components/home/home.component';
import { PatinhoComponent } from './components/patinho/patinho.component';

const routes: Routes = [
  {path: '',          component:HomeComponent},
  {path: 'gato-fofo', component:GatoFofoComponent},
  {path: 'cachorro',  component:CachorroComponent},
  {path: 'patinho',   component:PatinhoComponent},
  {path: 'coelho',    component:CoelhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

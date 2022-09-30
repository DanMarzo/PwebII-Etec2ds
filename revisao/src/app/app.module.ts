import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './template/footer/footer.component';
import { GatoFofoComponent } from './components/gato-fofo/gato-fofo.component';
import { PatinhoComponent } from './components/patinho/patinho.component';
import { CoelhoComponent } from './components/coelho/coelho.component';
import { CachorroComponent } from './components/cachorro/cachorro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    GatoFofoComponent,
    PatinhoComponent,
    CoelhoComponent,
    CachorroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

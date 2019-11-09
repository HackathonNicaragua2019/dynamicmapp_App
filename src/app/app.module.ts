import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/input_Autocompletado/autocompletado.component';

import { MaterialModule } from './material.module';
// import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import {InformacionRutaComponent} from './components/informacion-ruta/informacion-ruta.component';
import {CompraBoletosComponent} from './components/compra-boletos/compra-boletos.component';
import {CompraRealizadaComponent} from './components/compra-realizada/compra-realizada.component';


import {
  MapModule,
  MapAPILoader,
  MarkerTypeId,
  IMapOptions,
  IBox,
  IMarkerIconInfo,
  WindowRef,
  DocumentRef,
  MapServiceFactory,
  BingMapAPILoaderConfig,
  BingMapAPILoader,
  GoogleMapAPILoader,
  GoogleMapAPILoaderConfig
} from 'angular-maps';

export function MapServiceProviderFactory() {
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey = "Ap0AObt84NcDaUThCeWOj52ZqUHv6k4TJhjLibR-DghC-semgoj-0uPbIi8r0E4j"; // your bing map key
  bc.branch = "experimental";
  // to use the experimental bing brach. There are some bug fixes for
  // clustering in that branch you will need if you want to use 
  // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}

@NgModule({
  imports:
    [BrowserModule,
      // ComponentsModule, 
      MaterialModule,
      ServicesModule,
      MapModule.forRoot()
    ],
  declarations: [AppComponent, ToolbarComponent, InformacionRutaComponent, CompraBoletosComponent, CompraRealizadaComponent],
  providers: [{
    provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory
  }],
  entryComponents:[InformacionRutaComponent, CompraBoletosComponent, CompraRealizadaComponent],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule {
}
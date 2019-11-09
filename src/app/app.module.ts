import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MaterialModule } from './material.module';
// import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';


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
  declarations: [AppComponent, ToolbarComponent],
  providers: [{
    provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory
  }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule {
}
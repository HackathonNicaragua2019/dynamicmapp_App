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


import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  imports:
    [
      BrowserModule,
      // ComponentsModule, 
      MaterialModule,
      ServicesModule,
      AgmCoreModule.forRoot({ 
        // API KEY GOOGLE MAP
        apiKey: '',
      }),
        // Componente para las direcciones
      AgmDirectionModule
    ],
  declarations: [AppComponent, ToolbarComponent, InformacionRutaComponent, CompraBoletosComponent, CompraRealizadaComponent],
  providers: [
    GoogleMapsAPIWrapper
  ],
  entryComponents: [InformacionRutaComponent, CompraBoletosComponent, CompraRealizadaComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
}
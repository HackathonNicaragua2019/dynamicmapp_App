import { Component, OnInit } from "@angular/core";
import { HttpService } from './services/http/http.service';
import { MouseEvent } from '@agm/core';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpService) {

    timer(10000, 10000).subscribe(result => {
      this.httpService.getBus(1).subscribe(res => {
        this.longitud = res['position']['coordinates'][0];
        this.latitud = res['position']['coordinates'][1];
      });
    });
  }

  // Inicializacion de los puntos en el mapa
  latitud: Number = 41.85
  longitud: Number = -87.65

  public markers: any = [];
  // Coordenada de ejemplo Origen y destino del primer punto
  public origin: any;
  public destination: any;
  public ruta: any;
  public directions: any = [];

  ngOnInit() {
  }

  crearRuta() {
    const params = {
      start: JSON.stringify({
        "type": "Point",
        "coordinates": [-74.98615270853043, 40.74894149554006]
      }),
      end: JSON.stringify({
        "type": "Point",
        "coordinates": [-74.98615270853043, 40.74894149554006]
      }),
      route: JSON.stringify({
        "type": "LineString",
        "coordinates": [
          [-74.98615270853043, 40.74894149554006],
          [-74.98615270853043, 40.74894149554006],
          [-74.98615270853043, 40.74894149554006]
        ]
      })
    };

    this.httpService.crearRuta(params).subscribe(result => {
      console.log(result);
    });
  }

  listarRutas() {
    this.httpService.getRoutes().subscribe(result => {
      console.log(result);
    })
  }

  obtenerCualquierRuta(id) {
    this.httpService.getAnyRoute(id).subscribe(result => {
      console.log(result);
    });
  }

  eliminarRuta(id) {
    this.httpService.eliminarRuta(id).subscribe(result => {
      console.log(result);
    });
  }

  mapClicked($event: MouseEvent) {
    // const point = {
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    // };

    // this.markers.push({
    //   lat: point.lat,
    //   lng: point.lng,
    //   draggable: true
    // });
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  optionSelected(event) {
    this.ruta = event;
    this.origin = {
      lng: event['start']['coordinates'][0],
      lat: event['start']['coordinates'][1],
    };

    this.destination = {
      lng: event['end']['coordinates'][0],
      lat: event['end']['coordinates'][1],
    }

  }

  ObtenerMarcadores() {
    this.markers = [];
    this.ruta.stops.forEach(item => {
      const m = {
        lng: item['position']['coordinates'][0],
        lat: item['position']['coordinates'][1],
      };
      this.markers.push(m);
    });
    console.log(this.markers);
  }

}

import { Component, OnInit } from "@angular/core";
import { HttpService } from './services/http/http.service';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpService) {

  }

  // Inicializacion de los puntos en el mapa
  lat: Number = 41.85
  lng: Number = -87.65

  // Coordenada de ejemplo Origen y destino del primer punto
  origin = { lat: 12.923640, lng: -85.922035 };
  destination = { lat: 13.244484, lng: -85.558890 };

  // Coordenada de ejemplo Origen y destino del segundo punto
  origin2 = { lat: 12.112772, lng: -86.238566 };
  destination2 = { lat: 12.933362, lng: -85.917761 };

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
}

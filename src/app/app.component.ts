import { Component } from "@angular/core";
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
} from "angular-maps";
​
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  // styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public latitud: any = 29.714994;
  public longitud: any = -95.46244;
​
  _markerTypeId = MarkerTypeId;
  _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1,
    zoom: 0
  };
​
  public _box: IBox = {
    maxLatitude: 32,
    maxLongitude: -92,
    minLatitude: 29,
    minLongitude: -98
  };
​
  private _iconInfo: IMarkerIconInfo = {
    markerType: MarkerTypeId.None,
    fontName: "FontAwesome",
    fontSize: 10,
    color: "blue",
    markerOffsetRatio: { x: 0.5, y: 1 },
    text: "\uF276"
  };
​
  constructor() {}
​
  _click() {
    console.log("hello world...");
  }
​
  addMarkert() {
    this._box = {
      maxLatitude: 12.9289487,
      maxLongitude: -85.9175752,
      minLatitude: 12.9289487,
      minLongitude: -85.9175752
    };
​
    this.latitud = 12.9289487;
    this.longitud = -85.9175752;
  }
​
  addSecondMarkert() {
    this._box = {
      maxLatitude: 32,
      maxLongitude: -92,
      minLatitude: 29,
      minLongitude: -98
    };
​
    this.latitud = 29.714994;
    this.longitud = -95.46244;
  }
}

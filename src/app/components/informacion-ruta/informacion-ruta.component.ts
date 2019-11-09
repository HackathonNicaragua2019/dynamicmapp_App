import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-informacion-ruta',
  templateUrl: './informacion-ruta.component.html',
  styleUrls: ['./informacion-ruta.component.css']
})
export class InformacionRutaComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<InformacionRutaComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
  }

}

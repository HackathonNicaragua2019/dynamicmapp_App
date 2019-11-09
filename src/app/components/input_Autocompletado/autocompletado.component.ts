import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {InformacionRutaComponent} from '../informacion-ruta/informacion-ruta.component';
import {CompraBoletosComponent} from '../compra-boletos/compra-boletos.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'my-toolbar',
  templateUrl: './autocompletado.component.html',
})
export class ToolbarComponent {

  constructor(private _bottomSheet: MatBottomSheet, public dialog: MatDialog) {}

  openDialogCompra(): void {
    this._bottomSheet.open(CompraBoletosComponent);
  }

  openBottomSheet(): void {
    this._bottomSheet.open(InformacionRutaComponent);
  }

  @Output() acselectedOption = new EventEmitter<any>();
  public showChips = false;

  myControl = new FormControl();
  options: any[] = [
    {
      name: 'Item route Map one',
      maxLatitude: 12.9289487,
      maxLongitude: -85.9175752,
      minLatitude: 12.9289487,
      minLongitude: -85.9175752,
      latitud: 12.9289487,
      longitud: -85.9175752
    },
    {
      name: 'Item route Map two',
      maxLatitude: 32,
      maxLongitude: -92,
      minLatitude: 29,
      minLongitude: -98,
      latitud: 29.714994,
      longitud: -95.46244
    }
  ];

  selectedOption(event, index) {
    const input = document.getElementById('inputValue');
    input.blur();
    this.acselectedOption.emit(this.options[index]);
    this.showChips = true;
  }
}

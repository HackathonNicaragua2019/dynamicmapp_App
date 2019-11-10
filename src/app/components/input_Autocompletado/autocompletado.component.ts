import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { InformacionRutaComponent } from '../informacion-ruta/informacion-ruta.component';
import { CompraBoletosComponent } from '../compra-boletos/compra-boletos.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'my-toolbar',
  templateUrl: './autocompletado.component.html',
})
export class ToolbarComponent implements OnInit {

  constructor(
    private _bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
    private httpService: HttpService) {
    this.httpService.getRoutes().subscribe(result => {
      if (result) {
        this.options = result['data'];
      }
    })
  }
  /**
   * @method openDialogCompra
   * Este metodo habré el componete de compra de boleto, 
   * y muestra la información que debe llenar el usuario para realiza una compra
   */
  openDialogCompra(): void {
    this._bottomSheet.open(CompraBoletosComponent);
  }

  /**
 * @method openBottomSheet
 * Este metodo habré el componete de Información de ruta, 
 * esta es una información de los datos de la ruta, tanto del conductor como de la ruta
 */
  openBottomSheet(): void {
    this._bottomSheet.open(InformacionRutaComponent);
  }

  @Output() acselectedOption = new EventEmitter<any>();
  public showChips = false;

  myControl = new FormControl();
  options: any;
  // options: any = [
  //   {
  //     name: 'Item route Map one',
  //     maxLatitude: 12.9289487,
  //     maxLongitude: -85.9175752,
  //     minLatitude: 12.9289487,
  //     minLongitude: -85.9175752,
  //     latitud: 12.9289487,
  //     longitud: -85.9175752
  //   },
  //   {
  //     name: 'Item route Map two',
  //     maxLatitude: 32,
  //     maxLongitude: -92,
  //     minLatitude: 29,
  //     minLongitude: -98,
  //     latitud: 29.714994,
  //     longitud: -95.46244
  //   }
  // ];

  selectedOption(event, index) {
    const input = document.getElementById('inputValue');
    input.blur();
    this.acselectedOption.emit(this.options[index]);
    this.showChips = true;
  }

  ngOnInit() {

  }
}

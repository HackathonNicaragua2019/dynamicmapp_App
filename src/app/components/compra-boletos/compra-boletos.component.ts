import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CompraRealizadaComponent} from '../compra-realizada/compra-realizada.component'

@Component({
  selector: 'app-compra-boletos',
  templateUrl: './compra-boletos.component.html',
  styleUrls: ['./compra-boletos.component.css']
})
export class CompraBoletosComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<CompraBoletosComponent>, public dialog: MatDialog){}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
/**
 * @method openDialogCompraRealizada
 * Este metodo habré el componete de compra realizada, donde se mostrará la informacion exitosa de
 * la compra del boleto
 */
  openDialog(): void {
    const dialogRef = this.dialog.open(CompraRealizadaComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit() {
  }

}

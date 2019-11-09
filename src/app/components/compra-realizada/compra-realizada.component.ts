import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-compra-realizada',
  templateUrl: './compra-realizada.component.html',
  styleUrls: ['./compra-realizada.component.css']
})
export class CompraRealizadaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CompraRealizadaComponent>, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  openSnackCompraExitosa(message: string, action: string) {
    this._snackBar.open("Boleto guardado en galeria!!", action, {
      duration: 2000,
    });
  }

}

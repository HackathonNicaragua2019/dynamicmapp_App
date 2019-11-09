import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-compra-realizada',
  templateUrl: './compra-realizada.component.html',
  styleUrls: ['./compra-realizada.component.css']
})
export class CompraRealizadaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CompraRealizadaComponent>) { }

  ngOnInit() {
  }

}

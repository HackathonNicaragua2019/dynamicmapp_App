import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-compra-boletos',
  templateUrl: './compra-boletos.component.html',
  styleUrls: ['./compra-boletos.component.css']
})
export class CompraBoletosComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<CompraBoletosComponent>){}
  
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
  }

}

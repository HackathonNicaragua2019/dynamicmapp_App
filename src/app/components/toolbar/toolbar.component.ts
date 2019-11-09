import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  @Output() acselectedOption = new EventEmitter<any>();

  myControl = new FormControl();
  options: any[] = [
    {
      name: 'Brigadista',
      maxLatitude: 12.9289487,
      maxLongitude: -85.9175752,
      minLatitude: 12.9289487,
      minLongitude: -85.9175752,
      latitud: 12.9289487,
      longitud: -85.9175752
    },
    {
      name: 'EEUU',
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
  }
}

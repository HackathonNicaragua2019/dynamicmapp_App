import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraBoletosComponent } from './compra-boletos.component';

describe('CompraBoletosComponent', () => {
  let component: CompraBoletosComponent;
  let fixture: ComponentFixture<CompraBoletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraBoletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

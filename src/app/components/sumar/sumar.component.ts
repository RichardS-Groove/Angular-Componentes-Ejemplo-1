import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  num1: number;
  num2: number;
  resultado: number;

  constructor() {
    this.num1 = 10;
    this.num2 = 100;
    this.resultado = null;

  }

  ngOnInit(): void {}


  onclick() {
    this.resultado = this.num1 + this.num2;
  }

  /**Declaración de variables y creación de un metodo en una clase - función */
}

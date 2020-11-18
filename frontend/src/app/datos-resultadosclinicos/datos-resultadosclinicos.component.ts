import { Component, Input, OnInit } from '@angular/core';
import { ResultadoClinico } from '../models/resultadoclinico';

@Component({
  selector: 'app-datos-resultadosclinicos',
  templateUrl: './datos-resultadosclinicos.component.html',
  styleUrls: ['./datos-resultadosclinicos.component.css']
})
export class DatosResultadosclinicosComponent implements OnInit {

  @Input()
  resultadoclinico: ResultadoClinico;

  constructor() { }

  ngOnInit(): void {
    console.log(this.resultadoclinico.nombrepaciente);
  }

}

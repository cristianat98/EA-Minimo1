import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultadoClinico } from '../models/resultadoclinico';

@Component({
  selector: 'app-datos-resultadosclinicos',
  templateUrl: './datos-resultadosclinicos.component.html',
  styleUrls: ['./datos-resultadosclinicos.component.css']
})
export class DatosResultadosclinicosComponent implements OnInit {

  @Input()
  resultadoclinico: ResultadoClinico;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  modificar(){
    this.router.navigate(['/' + this.resultadoclinico.id]);
  }

}

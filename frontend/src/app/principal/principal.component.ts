import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultadoClinico } from '../models/resultadoclinico';
import { ResultadoclinicoService } from '../services/resultadoclinico.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  resultados: ResultadoClinico[];
  constructor(private resultadoService: ResultadoclinicoService, private router: Router) { }

  ngOnInit(): void {
    this.resultadoService.getResultados().subscribe(data =>{
      this.resultados = data;
      console.log(this.resultados);
    })
  }

  nuevoResultado(){
    this.router.navigateByUrl('/nuevoresultado');
  }

}

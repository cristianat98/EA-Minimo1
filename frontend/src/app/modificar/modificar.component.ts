import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultadoClinico } from '../models/resultadoclinico';
import { ResultadoclinicoService } from '../services/resultadoclinico.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  resultadoclinicoForm: FormGroup;
  resultado: ResultadoClinico;
  id: String;
  constructor(private formBuilder: FormBuilder, private resultadoService: ResultadoclinicoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.resultadoService.getResultado(this.id).subscribe(data =>{
      this.resultado = data;
    })
    
    this.resultadoclinicoForm = this.formBuilder.group({
      nombrepaciente: ['', [Validators.required, Validators.nullValidator]],
      id: ['', [Validators.required, Validators.nullValidator]],
      fecharesultado: ['', [Validators.required, Validators.nullValidator]],
      resultado: ['', [Validators.required, Validators.nullValidator]],
      test: ['', [Validators.required, Validators.nullValidator]]
    });
  }

  get formControls(){
    return this.resultadoclinicoForm.controls;
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

  modificarresultado(){
    if(this.resultadoclinicoForm.invalid){
      return;
    }
    
    const nombrepaciente = this.resultadoclinicoForm.value.nombrepaciente;
    const id = this.resultadoclinicoForm.value.id;
    const fecharesultado = this.resultadoclinicoForm.value.fecharesultado;
    const resultado = this.resultadoclinicoForm.value.resultado;
    const test = this.resultadoclinicoForm.value.test;

    const resultadomodificado = {'nombrepaciente': nombrepaciente, 'id': id, 'fecharesultado': fecharesultado, 'resultado': resultado, 'test': test};
    this.resultadoService.modificarResultado(resultadomodificado, this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.router.navigateByUrl('/principal');
    })
  }

}

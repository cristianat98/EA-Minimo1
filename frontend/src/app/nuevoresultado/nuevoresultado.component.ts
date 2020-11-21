import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultadoclinicoService } from '../services/resultadoclinico.service';

@Component({
  selector: 'app-nuevoresultado',
  templateUrl: './nuevoresultado.component.html',
  styleUrls: ['./nuevoresultado.component.css']
})
export class NuevoresultadoComponent implements OnInit {

  resultadoclinicoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private resultadoService: ResultadoclinicoService, private router: Router) { }

  ngOnInit(): void {
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

  addresultado(): void{
    if(this.resultadoclinicoForm.invalid){
      return;
    }
    const nombrepaciente = this.resultadoclinicoForm.value.nombrepaciente;
    const id = this.resultadoclinicoForm.value.id;
    const fecharesultado = this.resultadoclinicoForm.value.fecharesultado;
    const resultado = this.resultadoclinicoForm.value.resultado;
    const test = this.resultadoclinicoForm.value.test;

    console.log(test);

    const resultadoclinico = {'nombrepaciente': nombrepaciente, 'id': id, 'fecharesultado': fecharesultado, 'resultado': resultado, 'test': test};
    this.resultadoService.addResultado(resultadoclinico).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }

  atras(){
    this.router.navigateByUrl('/principal');
  }

}

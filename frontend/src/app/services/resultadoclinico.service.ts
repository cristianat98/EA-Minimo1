import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResultadoClinico } from '../models/resultadoclinico'

@Injectable({
  providedIn: 'root'
})
export class ResultadoclinicoService {

  constructor(private http: HttpClient) { }

  getResultados(): Observable<ResultadoClinico[]>{
    return this.http.get<ResultadoClinico[]>(environment.apiURL + "/resultadosclinicos");
  }

  getResultado(id: String): Observable<ResultadoClinico>{
    return this.http.get<ResultadoClinico>(environment.apiURL + "/resultadosclinicos/" + id);
  }

  addResultado(nuevoresultado: ResultadoClinico): Observable<any>{
    return this.http.post(environment.apiURL + '/resultadosclinicos/new', nuevoresultado);
  }

  modificarResultado(resultadomodificado: ResultadoClinico, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/resultadosclinicos/update/" + id, resultadomodificado);
  }
}

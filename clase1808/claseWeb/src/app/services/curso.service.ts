import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../interfaces/curso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  apiURL = `https://clases2020-e5713.firebaseio.com/Cursos`

  constructor(private clienteServicio: HttpClient ) { }

  //si le pasamos parAmetro consulta con por un cOdigo, sino le pasamos parAmetro
  // consulta todos los cursos
  public getCursos(codigo='')
  {
    if (codigo=='')
      return this.clienteServicio.get(`${this.apiURL}.json`).toPromise()
    return this.clienteServicio.get(`${this.apiURL}/${codigo}.json`).toPromise()
    
  }
  //public getCurso(codigo)
  //{
  //  return this.clienteServicio.get(`${this.apiURL}/${codigo}.json`).toPromise()
  //}
  //     { codigo:'003',descripcion:'Sexto A', cupo:60  } formato JSON
  // crear o modificar un curso
  public postCurso(cursox: Curso)
  {
    //  https://clases2020-e5713.firebaseio.com/Cursos/003.json
    return this.clienteServicio.put(`${this.apiURL}/${cursox.codigo}.json`
    , cursox , {headers :{'Content-Type':'application/json'}}   ).toPromise();

  }
  //eliminar un curso segUn se cOdigo
  public deleteCurso(codigox:string)
  {
    return this.clienteServicio.delete(`${this.apiURL}/${codigox}.json`).toPromise();
  }

}

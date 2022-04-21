import { Component, OnInit } from '@angular/core';
import { Curso, alumno } from 'src/app/interfaces/curso';
import { ICrud } from 'src/app/interfaces/ICrud';
import { CursoService } from 'src/app/services/curso.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage   implements OnInit, ICrud {

  public alumnoAuxiliar: alumno={identificacion:'',nombre:''};

  public cursoAuxiliar: Curso = {codigo:'000',descripcion:'Vacío',cupo:0, seccion:'M', alumnos:[]} ;
  public cursosAuxiliar: Curso[] = [] ;

  public SeccionesAuxiliar: {codigo:string, descripcion:string}[]=
  [
    {codigo:'M', descripcion:'Matutino G'},
    {codigo:'V', descripcion:'Vespertino G'},
    {codigo:'N', descripcion:'Nocturno G'}
  ];

  constructor(private cliente: CursoService, private toast: ToastController) {
   }
   async mostrarMensaje(mensaje:string, duracion:number){
     // convertimos en sIncrono o esperamos que la funciOn cree el toast 
      const mensajex= await this.toast.create({message:mensaje, duration:duracion });
      // ya estamos seguros que el toast esta creado, y podemos invocar el mEtodo present
      mensajex.present();
  }
  grabar(): void {
    this.cliente.postCurso(this.cursoAuxiliar).then(respuesta=>{

      this.mostrarMensaje('grabO correctamente',2000);
      //console.log('grabO correctamente')


    }).catch(error=>{
      console.log('no se pudo almacenar el curso')
    })
    
  }
  consultar(): void {

    this.cliente.getCursos().then(respuesta=>{
      this.cursosAuxiliar=[];
      for (let elemento in respuesta)
      {
        this.cursosAuxiliar.push(respuesta[elemento]);
      }

    })
    .catch(err=>{
      console.log(err)
    })
  }
  consultaIndividual(codigox:string){
    this.cliente.getCursos(codigox).then(respuesta=>{
      this.cursoAuxiliar= <Curso>respuesta ;
    })
    .catch(error=>{
      console.log(error)
    })
  }
  eliminar(): void {
    this.cliente.deleteCurso(this.cursoAuxiliar.codigo).then(respuesta=>{
      console.log('se eliminO correctamente')
    })
    .catch(error=>{
      console.log('No se pudo eliminar el curso')
    })
  }

  ngOnInit() {

  }
  nuevo()
  {
    //this.cursoAuxiliar.codigo='';
    this.cursoAuxiliar={ descripcion:'',cupo:0,codigo:'', seccion:'M', alumnos:[] };
  }
  agregarAlumno()
  {
    this.cursoAuxiliar.alumnos.push(this.alumnoAuxiliar);
  }
}

//#region comentarios

//#endregion
import { Component, OnInit } from '@angular/core';
import { AcercadeService } from 'src/app/servicios/acercade.service';
import { ICrud } from 'src/app/interfaces/icrud';
import { curso } from 'src/app/interfaces/curso';
import { element } from 'protractor';
import { ToastController, NavController, ModalController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SegundaPage } from '../segunda/segunda.page';
import { EjemplomodalPage } from '../ejemplomodal/ejemplomodal.page';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.page.html',
  styleUrls: ['./acercade.page.scss'],
})
export class AcercadePage implements ICrud, OnInit {

  prueba:string;
  parametros:null;
  cursoAuxiliar:curso={codigo:'',descripcion:'joancema',seccion:'',alumnos:[]};
  cursosAuxiliar:curso[]=[];

  public seccion:{codigo:string, descripcion:string}[]=[
    {codigo:'M',descripcion:'Matutina'},
    {codigo:'V',descripcion:'Vespertina'},
    {codigo:'X',descripcion:'Nocturna'}
  ];

  cursosListado:{codigo:string,lista:string,edad:number}[]=[
    {codigo:'',lista:'',edad:23}
    ,
    {codigo:'',lista:'',edad:23}
  ];



  constructor( private toast:ToastController, private pruebax: AcercadeService
    , private ruta:Router, private navegador:NavController, private modal:ModalController,
    public menuCtrl: MenuController ) { }


    //ionViewWillEnter() {
    //  this.menuCtrl.enable(false);
    //}
  nuevo(): void {

    this.cursoAuxiliar={codigo:'',descripcion:'',seccion:'',alumnos:[]};
    this.presentarMensaje('Creando un nuevo elemento',2000);
    
    this.cursosListado.push({codigo:'',lista:'',edad:3});

    this.pruebax.appPages.push({
      title: 'Prueba de fuego',
      url: '/folder/Inbox',
      icon: 'mail'
    });


  }
  async presentarMensaje(mensaje:string, duracion:number)
  {
    const toastx= await this.toast.create({ message:mensaje,duration:duracion });
    toastx.present();
    
  }

  agregarAlumno()
  {
    this.cursoAuxiliar.alumnos.push({identificacion:'999999999',nombre:'Primero'});

  }

  consultar(): void {

    
    this.pruebax.getCursos().then(res=>{
      console.log(res)
      this.cursosAuxiliar=[];  
      for (let elemento in res)
      {
        this.cursosAuxiliar.push(res[elemento])
      }
    }).catch(err=>{

    })
    

    /*
    this.pruebax.getCurso().subscribe(res=>{
      this.cursosAuxiliar=[];
      if (!Array.isArray(res))
      for (let elemento in res)
      {
        this.cursosAuxiliar.push(res[elemento])
      }
    })
    */
    
  }
  eliminar(): void {
    this.pruebax.deleteCurso(this.cursoAuxiliar.codigo).then(res=>{
      console.log(res)
    })
  }
  consultarIndividual(codigo)
  {
    this.pruebax.getCurso(codigo).subscribe(res=>{
      this.cursoAuxiliar=(<curso>res);
      
    })
  }

  ngOnInit() {
    
  }
  grabar(){
    this.pruebax.postCurso(this.cursoAuxiliar).then(respuesta=>{
      console.log(respuesta)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  navegar()
  {
    this.ruta.navigate(['/segunda']);
  }
  navegar2()
  {
    let prueba = this.cursoAuxiliar.descripcion
    console.log(prueba)
    this.navegador.navigateForward(['/segunda/',JSON.stringify(this.cursoAuxiliar)])
  }

  async abrirModal()
  {
    const modal = await this.modal.create({
      component: EjemplomodalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'nombre': 'Douglas',
        'apellido': 'Adams',
        'objeto': this.cursoAuxiliar
      }
    });
    modal.onWillDismiss().then(x=>{
      console.log(x.data)
    })
    return await modal.present();
    //const { data } = await modal.onWillDismiss();
    //console.log(data);
  }

}

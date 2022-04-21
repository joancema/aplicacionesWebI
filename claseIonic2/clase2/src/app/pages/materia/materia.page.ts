import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.page.html',
  styleUrls: ['./materia.page.scss'],
})
export class MateriaPage implements OnInit {

  public prueba:string ='joancema';
  objetoPrueba:{valor1:number,valor2:number,suma:number}={valor1:2, valor2:5,suma:0 };

  public valor1:number=0;
  public valor2:number=0;
  public suma:number=0;



  constructor() {
    //this.valor1=5;
    //this.valor2=7;

   }

  ngOnInit() {
  }
  sumar()
  {
    this.suma=this.valor1+this.valor2;
    this.objetoPrueba.suma=this.objetoPrueba.valor1+this.objetoPrueba.valor2;
  }


}

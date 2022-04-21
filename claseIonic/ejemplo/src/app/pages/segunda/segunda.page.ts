import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {

  parametros=null;
  constructor(private activo:ActivatedRoute) { }

  ngOnInit() {
    this.parametros=this.activo.snapshot.paramMap.get('parametro');
    console.log( JSON.parse( this.parametros))
  }

}

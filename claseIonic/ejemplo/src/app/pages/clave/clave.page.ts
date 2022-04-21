import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-clave',
  templateUrl: './clave.page.html',
  styleUrls: ['./clave.page.scss'],
})
export class ClavePage implements OnInit {

  constructor(private ruta:Router, public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
      this.menuCtrl.enable(false);
  }
  entrar()
  {
    this.menuCtrl.enable(true);
    this.ruta.navigate(['/']);

  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ejemplomodal',
  templateUrl: './ejemplomodal.page.html',
  styleUrls: ['./ejemplomodal.page.scss'],
})
export class EjemplomodalPage implements OnInit {

  @Input() nombre: string;

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}

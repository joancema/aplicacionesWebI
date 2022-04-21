import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { curso } from '../interfaces/curso';



@Injectable({
  providedIn: 'root'
})
export class AcercadeService {
  apiURL = `https://clases2020-e5713.firebaseio.com/Cursos`;

  public appPages = [
    {
      title: 'Inbox',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    },
    {
      title:'Acerca de',
      url:'/acercade',
      icon: 'warning'
    },
    {
      title: 'Joancema',
      url: '/folder/Inbox',
      icon: 'mail'
    }
  ];



  constructor(private http:HttpClient ) { }
  
  public getCurso(codigo='') {
    if (codigo=='')
    return this.http.get(`${this.apiURL}.json`);
    return this.http.get(`${this.apiURL}/${codigo}.json`);
  }

  public getCursos()
  {
    return this.http.get(`${this.apiURL}.json`).toPromise();
  }

  public postCurso(curso:curso)
  {
    return this.http.put(`${this.apiURL}/${curso.codigo}.json`, curso ,
    {headers:{'Content-Type':'application/json'}} ).toPromise()
  }
  public deleteCurso(codigo:string)
  {
    return this.http.delete(`${this.apiURL}/${codigo}.json`).toPromise()
  }
}

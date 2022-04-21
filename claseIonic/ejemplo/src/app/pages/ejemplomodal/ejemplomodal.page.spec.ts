import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EjemplomodalPage } from './ejemplomodal.page';

describe('EjemplomodalPage', () => {
  let component: EjemplomodalPage;
  let fixture: ComponentFixture<EjemplomodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemplomodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EjemplomodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

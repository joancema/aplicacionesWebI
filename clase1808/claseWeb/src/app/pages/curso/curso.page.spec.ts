import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursoPage } from './curso.page';

describe('CursoPage', () => {
  let component: CursoPage;
  let fixture: ComponentFixture<CursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

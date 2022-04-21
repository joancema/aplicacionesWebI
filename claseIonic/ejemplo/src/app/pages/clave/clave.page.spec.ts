import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClavePage } from './clave.page';

describe('ClavePage', () => {
  let component: ClavePage;
  let fixture: ComponentFixture<ClavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

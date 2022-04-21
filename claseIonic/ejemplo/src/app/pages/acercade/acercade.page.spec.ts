import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcercadePage } from './acercade.page';

describe('AcercadePage', () => {
  let component: AcercadePage;
  let fixture: ComponentFixture<AcercadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcercadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

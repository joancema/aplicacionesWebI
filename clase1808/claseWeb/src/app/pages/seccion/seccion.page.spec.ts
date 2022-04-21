import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeccionPage } from './seccion.page';

describe('SeccionPage', () => {
  let component: SeccionPage;
  let fixture: ComponentFixture<SeccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

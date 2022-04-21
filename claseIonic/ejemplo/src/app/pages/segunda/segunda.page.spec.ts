import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegundaPage } from './segunda.page';

describe('SegundaPage', () => {
  let component: SegundaPage;
  let fixture: ComponentFixture<SegundaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegundaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

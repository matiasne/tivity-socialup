import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormReservaComponent } from './form-reserva.component';

describe('FormReservaComponent', () => {
  let component: FormReservaComponent;
  let fixture: ComponentFixture<FormReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReservaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

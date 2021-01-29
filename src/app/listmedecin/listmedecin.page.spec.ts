import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListmedecinPage } from './listmedecin.page';

describe('ListmedecinPage', () => {
  let component: ListmedecinPage;
  let fixture: ComponentFixture<ListmedecinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmedecinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListmedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

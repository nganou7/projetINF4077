import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MappagePage } from './mappage.page';

describe('MappagePage', () => {
  let component: MappagePage;
  let fixture: ComponentFixture<MappagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MappagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

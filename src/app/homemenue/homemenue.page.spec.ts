import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomemenuePage } from './homemenue.page';

describe('HomemenuePage', () => {
  let component: HomemenuePage;
  let fixture: ComponentFixture<HomemenuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomemenuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomemenuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

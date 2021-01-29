import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostmesurePage } from './postmesure.page';

describe('PostmesurePage', () => {
  let component: PostmesurePage;
  let fixture: ComponentFixture<PostmesurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostmesurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostmesurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

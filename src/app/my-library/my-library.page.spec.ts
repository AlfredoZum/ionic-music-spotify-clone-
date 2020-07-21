import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyLibraryPage } from './my-library.page';

describe('MyLibraryPage', () => {
  let component: MyLibraryPage;
  let fixture: ComponentFixture<MyLibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibraryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

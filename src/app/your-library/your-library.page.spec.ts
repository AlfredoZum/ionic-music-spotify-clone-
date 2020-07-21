import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourLibraryPage } from './your-library.page';

describe('YourLibraryPage', () => {
  let component: YourLibraryPage;
  let fixture: ComponentFixture<YourLibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourLibraryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

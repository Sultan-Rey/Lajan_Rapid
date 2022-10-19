import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopuptransferComponent } from './popuptransfer.component';

describe('PopuptransferComponent', () => {
  let component: PopuptransferComponent;
  let fixture: ComponentFixture<PopuptransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopuptransferComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopuptransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

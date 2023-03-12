import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTudosComponent } from './my-tudos.component';

describe('MyTudosComponent', () => {
  let component: MyTudosComponent;
  let fixture: ComponentFixture<MyTudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

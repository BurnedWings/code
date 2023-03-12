import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTudosComponent } from './other-tudos.component';

describe('OtherTudosComponent', () => {
  let component: OtherTudosComponent;
  let fixture: ComponentFixture<OtherTudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherTudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherTudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

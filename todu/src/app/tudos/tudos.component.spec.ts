import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TudosComponent } from './tudos.component';

describe('TudosComponent', () => {
  let component: TudosComponent;
  let fixture: ComponentFixture<TudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TudosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

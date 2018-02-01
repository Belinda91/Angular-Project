import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CofresComponent } from './cofres.component';

describe('CofresComponent', () => {
  let component: CofresComponent;
  let fixture: ComponentFixture<CofresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CofresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CofresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

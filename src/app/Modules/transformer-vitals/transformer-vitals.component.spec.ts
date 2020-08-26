import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformerVitalsComponent } from './transformer-vitals.component';

describe('TransformerVitalsComponent', () => {
  let component: TransformerVitalsComponent;
  let fixture: ComponentFixture<TransformerVitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformerVitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformerVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

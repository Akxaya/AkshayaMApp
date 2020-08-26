import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformerLineUpComponent } from './transformer-line-up.component';

describe('TransformerLineUpComponent', () => {
  let component: TransformerLineUpComponent;
  let fixture: ComponentFixture<TransformerLineUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformerLineUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformerLineUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

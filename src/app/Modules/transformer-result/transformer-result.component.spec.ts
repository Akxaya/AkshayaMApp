import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformerResultComponent } from './transformer-result.component';

describe('TransformerResultComponent', () => {
  let component: TransformerResultComponent;
  let fixture: ComponentFixture<TransformerResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformerResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformerResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

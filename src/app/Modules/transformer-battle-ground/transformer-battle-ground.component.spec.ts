import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformerBattleGroundComponent } from './transformer-battle-ground.component';

describe('TransformerBattleGroundComponent', () => {
  let component: TransformerBattleGroundComponent;
  let fixture: ComponentFixture<TransformerBattleGroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformerBattleGroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformerBattleGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

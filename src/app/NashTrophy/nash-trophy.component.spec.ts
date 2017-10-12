import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NashTrophyComponent } from './nash-trophy.component';

describe('NashTrophyComponent', () => {
  let component: NashTrophyComponent;
  let fixture: ComponentFixture<NashTrophyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NashTrophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NashTrophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

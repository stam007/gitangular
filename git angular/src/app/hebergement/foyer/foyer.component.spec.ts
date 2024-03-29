import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerComponent } from './foyer.component';

describe('FoyerComponent', () => {
  let component: FoyerComponent;
  let fixture: ComponentFixture<FoyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

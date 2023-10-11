import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComponentComponent } from './show-component.component';

describe('ShowComponentComponent', () => {
  let component: ShowComponentComponent;
  let fixture: ComponentFixture<ShowComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowComponentComponent]
    });
    fixture = TestBed.createComponent(ShowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

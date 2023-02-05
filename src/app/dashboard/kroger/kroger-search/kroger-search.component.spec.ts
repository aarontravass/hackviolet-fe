import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrogerSearchComponent } from './kroger-search.component';

describe('KrogerSearchComponent', () => {
  let component: KrogerSearchComponent;
  let fixture: ComponentFixture<KrogerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrogerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrogerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

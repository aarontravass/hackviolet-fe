import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrogerProductViewComponent } from './kroger-product-view.component';

describe('KrogerProductViewComponent', () => {
  let component: KrogerProductViewComponent;
  let fixture: ComponentFixture<KrogerProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrogerProductViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrogerProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCardProductComponent } from './large-card-product.component';

describe('LargeCardProductComponent', () => {
  let component: LargeCardProductComponent;
  let fixture: ComponentFixture<LargeCardProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LargeCardProductComponent]
    });
    fixture = TestBed.createComponent(LargeCardProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

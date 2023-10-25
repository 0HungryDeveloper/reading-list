import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardProductComponent } from './small-card-product.component';

describe('SmallCardProductComponent', () => {
  let component: SmallCardProductComponent;
  let fixture: ComponentFixture<SmallCardProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallCardProductComponent]
    });
    fixture = TestBed.createComponent(SmallCardProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

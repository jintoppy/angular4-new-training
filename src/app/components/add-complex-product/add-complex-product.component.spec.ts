import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplexProductComponent } from './add-complex-product.component';

describe('AddComplexProductComponent', () => {
  let component: AddComplexProductComponent;
  let fixture: ComponentFixture<AddComplexProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComplexProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComplexProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

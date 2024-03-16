import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOfBottomComponentComponent } from './top-of-bottom-component.component';

describe('TopOfBottomComponentComponent', () => {
  let component: TopOfBottomComponentComponent;
  let fixture: ComponentFixture<TopOfBottomComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopOfBottomComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopOfBottomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

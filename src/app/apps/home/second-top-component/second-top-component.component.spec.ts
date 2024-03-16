import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTopComponentComponent } from './second-top-component.component';

describe('SecondTopComponentComponent', () => {
  let component: SecondTopComponentComponent;
  let fixture: ComponentFixture<SecondTopComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondTopComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondTopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

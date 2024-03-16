import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftComponentComponent } from './left-component.component';

describe('LeftComponentComponent', () => {
  let component: LeftComponentComponent;
  let fixture: ComponentFixture<LeftComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

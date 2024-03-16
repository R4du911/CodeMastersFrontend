import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoDeskComponent } from './modal-info-desk.component';

describe('ModalInfoDeskComponent', () => {
  let component: ModalInfoDeskComponent;
  let fixture: ComponentFixture<ModalInfoDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalInfoDeskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalInfoDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-info-desk',
  templateUrl: './modal-info-desk.component.html',
  styleUrl: './modal-info-desk.component.css'
})
export class ModalInfoDeskComponent {
  intervals: string[] = [
    '09:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00',
    '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00',
    '17:00-18:00'
  ];
}

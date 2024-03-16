import { Component } from '@angular/core';

@Component({
  selector: 'app-top-of-bottom-component',
  templateUrl: './top-of-bottom-component.component.html',
  styleUrl: './top-of-bottom-component.component.css'
})
export class TopOfBottomComponentComponent {
  desks = { '1': [[1.1, 2], [1.2, 0], [1.3, 1], [1.4, 2]], '2': [[2.1, 0], [2.2, 1], [2.3, 1], [2.4, 0]] }
}

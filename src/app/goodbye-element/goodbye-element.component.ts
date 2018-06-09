import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-goodbye-element',
  templateUrl: './goodbye-element.component.html',
  styleUrls: ['./goodbye-element.component.scss']
})
export class GoodbyeElementComponent {
  @Input() name = 'Goodbye Person';
}

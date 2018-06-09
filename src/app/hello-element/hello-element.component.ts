import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello-element',
  templateUrl: './hello-element.component.html',
  styleUrls: ['./hello-element.component.scss']
})
export class HelloElementComponent {
  @Input() name = 'Hello Person';
}

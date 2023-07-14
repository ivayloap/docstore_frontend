import { Component, Input } from '@angular/core';

@Component({
  selector: 'flash-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent {
  @Input() successMessage!: string;
  @Input() errorMessage!: string;
}

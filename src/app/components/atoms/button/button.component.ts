import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-a-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() primary?: boolean;
  @Input() secondary?: boolean;
  @Input() classIcon?: string;
  @Input() href?: string;

}

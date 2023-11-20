import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() bsClass: string | undefined;
  @Input() label: string | undefined;
  @Input() btnState: any;
  @Output() handleButtonClick: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    console.log('[Button]', this.btnState);
  }

  onClick() {
    this.handleButtonClick.emit();
  }
}

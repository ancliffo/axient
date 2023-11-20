import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() leafResult: string | null = null;
  showChallengeInput: boolean = false;

  toggleTextArea(e: any) {
    console.log(e.currentTarget.checked);
    this.showChallengeInput = e.currentTarget.checked;
  }
}

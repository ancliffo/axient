import {Component, Input, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() leafResult: string | null = null;
  showChallengeInput: boolean = false;

  // Hide the textarea if the leafResult has been cleared out
  ngOnChanges(changes: SimpleChange) {
    if (this.leafResult === null) {
      this.showChallengeInput = false;
    }
  }

  toggleTextArea(e: any) {
    this.showChallengeInput = e.currentTarget.checked;
  }
}

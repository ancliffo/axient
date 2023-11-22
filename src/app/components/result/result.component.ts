import {Component, Input, SimpleChange} from '@angular/core';
import {Results} from "../../Results";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() leafResult: string | null = null;
  @Input() submitted: boolean = false;
  model = new Results('', null, false, '');
  showChallengeInput: boolean = false;

  /**
   * Clear form and Hide the textarea if the leafResult has been cleared out
   * @param changes
   */
  ngOnChanges(changes: SimpleChange) {
    if (this.leafResult === null) {
      this.showChallengeInput = false;
      this.model.inputColor = '';
      this.model.inputLength = null;
      this.model.challengeCheck = false;
      this.model.challengeText = '';
    }
  }

  toggleTextArea(e: any) {
    this.showChallengeInput = e.currentTarget.checked;
  }
}

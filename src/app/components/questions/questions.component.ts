import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Questions} from "../../Questions";
import {answerObj} from "../../answerObj";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  @Input() questions: Questions[] = [];
  @Input() currentQuestion: number = 0;
  @Input() leafResult: string | null = null;
  @Output() updateAnswer: EventEmitter<any> = new EventEmitter();
  @Input() loading: boolean = false;

  ngOnInit(): void {
    console.log('[QUESTIONS Child]', this.questions);
  }

  handleUpdateAnswer(e: answerObj) {
    this.updateAnswer.emit(e);
  }
}

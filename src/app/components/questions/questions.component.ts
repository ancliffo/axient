import {Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import {Questions} from "../../Questions";
import {answerObj} from "../../answerObj";
import {QuestionService} from "../../services/question-service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  constructor(private _questionService: QuestionService) {}
  @Input() questions: Questions[] | null = this._questionService.getQuestions();
  @Input() currentQuestion: number = this._questionService.getQuestionNumber();
  @Input() leafResult: string | null = null;
  @Output() updateAnswer: EventEmitter<any> = new EventEmitter();
  @Input() loading: boolean = false;
  @Input() submitted: boolean = false;

  ngOnInit(): void {
    // console.log('[QUESTIONS Child]', this.questions);
  }

  handleUpdateAnswer(e: answerObj) {
    this.updateAnswer.emit(e);
  }
}

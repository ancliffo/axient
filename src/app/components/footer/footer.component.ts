import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Questions} from "../../Questions";
import { QuestionService } from "../../services/question-service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() currentQuestion: number;
  @Input() loading: boolean = false;
  @Input() submitted: boolean = false;
  @Input() questions: Questions[] = [];
  @Input() question: Questions = this.questions[0];
  @Output() onPrevQuestion: EventEmitter<Questions> = new EventEmitter();
  @Output() onNextQuestion: EventEmitter<Questions> = new EventEmitter();
  @Output() onRestart: EventEmitter<null> = new EventEmitter();
  @Output() onSubmit: EventEmitter<null> = new EventEmitter();
  @Output() btnClick = new EventEmitter();
  @Input() leafResult: string | null = null;

  constructor(private _questionService: QuestionService) {
    this.currentQuestion = 0;
  }

  nextQuestion() {
    this.onNextQuestion.emit();
  }

  prevQuestion() {
    // this.onPrevQuestion.emit();
    this._questionService.prevQuestion();
  }

  restart() {
    this.onRestart.emit();
  }

  submit() {
    this.onSubmit.emit();
  }
}

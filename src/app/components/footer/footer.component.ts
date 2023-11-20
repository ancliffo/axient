import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Questions} from "../../Questions";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() currentQuestion: number;
  @Input() questions: Questions[] = [];
  @Input() question: Questions = this.questions[0];
  @Output() onPrevQuestion: EventEmitter<Questions> = new EventEmitter();
  @Output() onNextQuestion: EventEmitter<Questions> = new EventEmitter();
  @Output() onRestart: EventEmitter<null> = new EventEmitter();
  @Output() btnClick = new EventEmitter();
  @Input() leafResult: string | null = null;

  constructor() {
    this.currentQuestion = 0;
  }

  nextQuestion() {
    this.onNextQuestion.emit();
  }

  prevQuestion() {
    this.onPrevQuestion.emit();
  }

  restart() {
    this.onRestart.emit();
  }

  submit() {
    console.log(this.questions);
    alert('Submitted!');
    this.restart();
  }
}

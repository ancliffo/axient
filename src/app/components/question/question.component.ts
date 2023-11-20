import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Questions} from "../../Questions";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question: Questions;
  @Input() currentQuestion: number;
  @Output() updateAnswer: EventEmitter<any> = new EventEmitter();
  questionOptions: any;

  constructor() {
    this.question = {
      id: 0,
      questionText: '',
      previousQuestion: 0,
      options: false,
      userAnswer: ''
    }
    this.currentQuestion = 0;
    this.questionOptions = [];
  }

  ngOnInit(): void {
    this.questionOptions = Object.values(this.question.options);
    console.log('[QUESTION Options]', this.questionOptions);
  }

  onUpdateAnswer(e: any) {
    console.log(e);
    console.log(e.target.value);
    this.updateAnswer.emit({id: this.question.id, answer: e.target.value});
  }
}

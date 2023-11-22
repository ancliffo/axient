import {Component, EventEmitter, Input, Output, SimpleChange} from '@angular/core';
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
  @Input() submitted: boolean = false;
  questionOptions: any;
  questionInput: null;

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
    this.questionInput = null;
  }

  ngOnInit(): void {
    this.questionOptions = Object.values(this.question.options);
  }

  /**
   * Clear all radio buttons once leaf is submitted
   * @param changes
   */
  ngOnChanges(changes: SimpleChange) {
    if (this.submitted) {
      this.questionInput = null;
    }
  }

  onUpdateAnswer(e: any) {
    this.updateAnswer.emit({id: this.question.id, answer: e.target.id.toLowerCase()});
  }
}

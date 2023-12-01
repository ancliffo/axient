import { Injectable } from '@angular/core';
import {Questions} from "../Questions";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionNumber: number = 0;
  private questions: Questions[] | null = null;

  constructor() {}

  setQuestions(qs: Questions[]) {
    this.questions = qs;
  }

  getQuestions() {
    return this.questions;
  }

  getQuestionNumber() {
    return this.questionNumber;
  }

  setQuestionNumber(questionNumber: number) {
    this.questionNumber = questionNumber;
  }

  prevQuestion() {
    console.log('[QUESTION SERVICE]', this.questions);
    console.log(this.questionNumber);
    if (this.questions) {
      console.log(this.questions[this.questionNumber].previousQuestion);
      this.setQuestionNumber(this.questions[this.questionNumber].previousQuestion);
    }
  }
}

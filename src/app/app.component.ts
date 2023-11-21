import {Component} from '@angular/core';
import {Questions} from "./Questions";
import {QUESTIONS} from "./mock-questions";
import {answerObj} from "./answerObj";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions: Questions[] = QUESTIONS;
  currentQuestion: number = 0;
  leafResult: string | null = null;
  loading: boolean = false;
  submitted: boolean = false;
  ngOnInit(): void {
    // console.log('[QUESTIONS Parent]', this.questions);
  }

  /**
   * Sets the next question number or the leafResult based off of current question data
   * @param question
   */
  nextQuestion(question:Questions) {
    let questionOptions = question.options;
    let userAnswer = this.questions[question.id!].userAnswer;

    this.loading = true;

    if (question.id === 0) {
      // First question is the welcome screen
      this.currentQuestion++;
    } else if (typeof userAnswer === 'string' && questionOptions[userAnswer].nextQuestionId) {
      this.currentQuestion = questionOptions[userAnswer].nextQuestionId;
    } else if (typeof userAnswer === 'string' && questionOptions[userAnswer].result) {
      this.leafResult = questionOptions[userAnswer].result;
    }

    setTimeout(()=> {
      // Mock the time a backend server would take to return the next piece of data
      this.loading = false;
    }, 500);
  }

  /**
   * Go to previousQuestion based off of question data
   * @param question
   */
  prevQuestion(question:Questions) {
    this.leafResult = null;
    this.currentQuestion = question.previousQuestion;
  }

  /**
   * Sets the user's answer for the current question
   * @param answer
   */
  updateAnswer(answer: answerObj) {
    if (answer && typeof answer.id !== undefined) {
      this.questions[answer.id!].userAnswer = answer.answer;
    }
  }

  /**
   * Clears all of the user's answers and sets the questions back to the start screen
   */
  restart() {
    let clearedQuestions = this.questions.reduce((prev: Questions[], cur: Questions) => {
      cur.userAnswer = false;
      prev.push(cur);

      return prev;
    }, []);

    let elements = document.getElementsByTagName("input");
    let select = <HTMLInputElement>document.getElementById("inputColor");
    let textArea = <HTMLInputElement>document.getElementById("challengeText");
    let challengeBox = <HTMLInputElement>document.getElementById("challengeCheck");

    select.value = '';
    textArea.value = '';
    challengeBox.checked = false;

    // Clear all radio buttons. TODO: Hook up checked values to read data.
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type == 'radio') {
        elements[i].checked = false;
      } else {
        elements[i].value = '';
      }
    }

    this.leafResult = null;
    this.currentQuestion = 0;
    this.questions = clearedQuestions;
    this.submitted = false;
  }

  submit() {
    this.submitted = true;
  }
}

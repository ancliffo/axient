import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { ButtonComponent } from "../button/button.component";
import {QUESTIONS} from "../../mock-questions";
import {Questions} from "../../Questions";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let questions: Questions[] = QUESTIONS;
  let currentQuestion: number = 1;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent, ButtonComponent],
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    component.questions = questions;
    component.currentQuestion = currentQuestion;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

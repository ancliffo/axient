import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from "../result/result.component";
import { QuestionsComponent } from './questions.component';
import { QuestionComponent } from "../question/question.component";
import { FormsModule } from "@angular/forms";

describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsComponent, ResultComponent, QuestionComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

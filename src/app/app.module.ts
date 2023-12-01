import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuestionComponent } from './components/question/question.component';
import { ResultComponent } from './components/result/result.component';
import { FormsModule } from "@angular/forms";
import { QuestionService } from "./services/question-service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    QuestionsComponent,
    FooterComponent,
    QuestionComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export interface Questions {
  id?: number;
  questionText: string;
  previousQuestion: number;
  options: any;
  userAnswer: string | boolean;
}

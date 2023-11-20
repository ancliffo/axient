import { Questions } from "./Questions";

export const QUESTIONS: Questions[] = [
  {
    id: 0,
    previousQuestion: 0,
    questionText: 'Use this wizard to help identify the type of leaf you have collected. Once identified, add any additional information you can and submit your observations.',
    options: false,
    userAnswer: false,
  },
  {
    id: 1,
    questionText: 'Does your leaf sample have needle-like leaves?',
    previousQuestion: 0,
    options: {
      yes: {
        text: 'Yes',
        nextQuestionId: 2
      },
      no: {
        text: 'No',
        nextQuestionId: 3
      }
    },
    userAnswer: false,
  },
  {
    id: 2,
    questionText: 'Does your leaf sample have Long-thin needles or Short-flat needles?',
    previousQuestion: 1,
    options: {
      'long-thin': {
        text: 'Long-thin',
        nextQuestionId: false,
        result: 'Pine'
      },
      'short-flat': {
        text: 'Short-flat',
        nextQuestionId: false,
        result: 'Spruce'
      }
    },
    userAnswer: false,
  },
  {
    id: 3,
    questionText: 'Does your leaf sample have a Compound or Simple arrangement?',
    previousQuestion: 1,
    options: {
      compound: {
        text: 'Compound',
        nextQuestionId: false,
        result: 'Walnut'
      },
      simple: {
        text: 'Simple',
        nextQuestionId: 4
      }
    },
    userAnswer: false,
  },
  {
    id: 4,
    questionText: 'Does your leaf sample have Lobed or Toothed Margins?',
    previousQuestion: 3,
    options: {
      lobed: {
        text: 'Lobed',
        nextQuestionId: 5,
      },
      toothed: {
        text: 'Toothed',
        nextQuestionId: false,
        result: 'Elm'
      }
    },
    userAnswer: false,
  },
  {
    id: 5,
    previousQuestion: 4,
    questionText: 'Is your leaf sample Triangular or Linear in shape?',
    options: {
      triangular: {
        text: 'Triangular',
        nextQuestionId: false,
        result: 'Maple'
      },
      linear: {
        text: 'Linear',
        nextQuestionId: false,
        result: 'Oak'
      }
    },
    userAnswer: false,
  }
];

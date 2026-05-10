interface QuestionI {
  id: number;
  text: string;
  options: string[];
  correct: number;
}

interface selectingOptionI {
  [key: number]: number | null;
}

export { type QuestionI, type selectingOptionI };

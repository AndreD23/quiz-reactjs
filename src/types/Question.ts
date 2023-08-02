import {AnswerOption} from "./AnswerOption";

export type Question = {
    questionText: string;
    answerOptions: AnswerOption[];
    correctAnswer: number;
}
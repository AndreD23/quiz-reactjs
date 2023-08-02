import {Question} from "../types/Question";

export const questions: Question[] = [
    {
        questionText: "Qual é a capital do Brasil?",
        answerOptions: [
            {answer: "Rio de Janeiro"},
            {answer: "São Paulo"},
            {answer: "Brasília"},
            {answer: "Belo Horizonte"},
        ],
        correctAnswer: 2
    },
    {
        questionText: "Qual é a capital da Argentina?",
        answerOptions: [
            {answer: "Buenos Aires"},
            {answer: "Córdoba"},
            {answer: "Rosário"},
            {answer: "Mendoza"},
        ],
        correctAnswer: 0
    },
    {
        questionText: "Qual é a capital da França?",
        answerOptions: [
            {answer: "Paris"},
            {answer: "Lyon"},
            {answer: "Marselha"},
            {answer: "Toulouse"},
        ],
        correctAnswer: 0
    },
    {
        questionText: "Qual é a capital da Inglaterra?",
        answerOptions: [
            {answer: "Londres"},
            {answer: "Manchester"},
            {answer: "Liverpool"},
            {answer: "Birmingham"},
        ],
        correctAnswer: 0
    }
]

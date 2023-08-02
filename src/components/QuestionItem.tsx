import {Question} from "../types/Question";
import {useState} from "react";

type Props = {
    index: number;
    question: Question;
    onAnswer: (answer: number) => void
}

export const QuestionItem = ({index, question, onAnswer}: Props) => {

    const [selectedAnswer, setSelectedAnswer] = useState<number|null>(null);

    const checkAnswer = (answerKey: number) => {
        if(selectedAnswer !== null) return;
        setSelectedAnswer(answerKey);
        setTimeout(() => {
            onAnswer(answerKey);
            setSelectedAnswer(null)
        },1000);

    }

    return (
        <div>
            <div className={"text-3xl font-bold mt-3 mb-10"}>{index}. {question.questionText}</div>
            <div>
                {question.answerOptions.map((answer, index) => (
                    <div
                        key={index}
                        onClick={() => checkAnswer(index)}
                        className={`px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-gray-100 border border-gray-300 hover:bg-sky-200
                        ${selectedAnswer !== null && "cursor-auto"}
                        ${selectedAnswer === index && selectedAnswer === question.correctAnswer && "bg-green-300 border-green-500 hover:bg-green-400 font-bold"}
                        ${selectedAnswer === index && selectedAnswer !== question.correctAnswer && "bg-red-300 border-red-500 hover:bg-red-400 font-bold"}
                        `}
                    >
                        {answer.answer}
                    </div>
                ))}
            </div>
        </div>
    )
}
"use client"

import {questions} from "../data/questions";
import {useState} from "react";
import {QuestionItem} from "../components/QuestionItem";
import {Results} from "../components/Results";

const Page = () => {

    const title = "Quiz do Milhão"

    // Salvar as respostas dadas em um array
    const [answers, setAnswers] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    // Carregar a próxima pergunta
    const loadNextQuestion = () => {
        // Verificar se existe uma próxima pergunta
        if(questions[currentQuestion + 1]) {
            setCurrentQuestion(currentQuestion + 1);
            return
        }

        // Se não existir, mostrar o resultado
        setShowResult(true);
    }

    // Salvar a resposta dada e carrega a próxima pergunta
    const handleAnswer = (answerKey: number) => {
        setAnswers([...answers, answerKey]);
        loadNextQuestion()
    }

    // Reiniciar o quiz
    const handleRestartButton = () => {
        setAnswers([]);
        setCurrentQuestion(0);
        setShowResult(false);
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-blue-600">
            <div className={"w-full max-w-xl rounded-md bg-white text-black shadow shadow-black"}>
                <div className={"p-5 font-bold text-2xl border-b border-gray-300"}>{title}</div>
                <div className={"p-5"}>
                    {!showResult &&
                    <QuestionItem index={currentQuestion+1} question={questions[currentQuestion]} onAnswer={handleAnswer} />
                    }
                    {showResult &&
                        <Results questions={questions} answers={answers} />
                    }
                </div>
                <div className={"p-5 text-center border-t border-gray-300"}>
                    {!showResult &&
                    `${currentQuestion +1} de ${questions.length} perguntas`
                    }
                    {showResult &&
                    <button onClick={handleRestartButton} className={"px-5 py-3 rounded-md text-md mb-4 cursor-pointer bg-blue-700 border border-blue-700 font-bold text-white"}>
                        Reiniciar
                    </button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Page;
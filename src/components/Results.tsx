import {Question} from "../types/Question";

type Props = {
    questions: Question[];
    answers: number[];
}

export const Results = ({questions, answers}: Props) => {
    return (
        <div>
            {questions.map((question, index) => (
                <div key={index} className={"mb-5"}>
                    <div className={"font-bold"}>
                        {index+1}. {question.questionText}
                    </div>
                    <div className={""}>
                        <span>({question.correctAnswer === answers[index] ? 'Acertou' : 'Errou'}) - </span>
                        {question.answerOptions[answers[index]].answer}
                    </div>
                    {question.correctAnswer !== answers[index] &&
                    <div>
                        <span>Resposta correta: </span>
                        <span className={"font-bold"}>{question.answerOptions[question.correctAnswer].answer}</span>
                    </div>
                    }
                </div>
            ))}
        </div>
    )
}
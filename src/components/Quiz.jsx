import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";



export default function Quiz(){

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizIsComplete = activeQuestionIndex ===  QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers)=>{
            return[...prevUserAnswers, selectedAnswer]
        });
    },[])

    const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null),[handleSelectAnswer])


    if(quizIsComplete) {
        return <Summary userAnswers={userAnswers}/>
    }

    //primero verificamos la longitud del array y luego hacemos el sort
    //si lo hacemos al reves el quiz no funciona

    return(
        <div id="quiz">
            <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}
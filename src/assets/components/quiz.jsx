/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';

import Results from './results';

function Quiz() {
    const questionBank = [
        {
            question: "What is the capital of Benin ?",
            options: ["London", "Berlin", "Cotonou", "Azowlisse"],
            answer: "Cotonou"
        },
        {
            question: "Which language is used for mobile apps ?",
            options: ["Dart", "Java", "Swift", "Kotlin"],
            answer: "All"
        },
        {
            question: "What does JSX stand for ?",
            options: ["JavaScript XML", "Java Syntax eXtension", "Just a Simple eXample", "None of the above"],
            answer: "JavaScript XML"
        },
    ];

    //Lets create a state that will track if we finish a quiz or not
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    // const [optionSelected, setOptionSelected] = useState("None");
    const initialAnswers = [null, null, null];

    const [userAnswers, setUsersAnswers] = useState(initialAnswers);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const selectedAnswer = userAnswers[currentQuestion];

    function handleSelectOption(option){
        // setOptionSelected(option);
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        setUsersAnswers(newUserAnswers);

    }

    function goToNext() {
        if (currentQuestion === questionBank.length - 1) {
           setIsQuizFinished(true)
        }else{
            setCurrentQuestion(currentQuestion + 1);
        }
    }

        function goToPrev() {
        if (currentQuestion > 0) {
           setCurrentQuestion(currentQuestion - 1);
        }    
    }

    if (isQuizFinished) {
       return Results;
    }

    return (
        <div>
            <h2>Question {currentQuestion + 1} </h2>
            <p className="question"> {questionBank[0].question} </p>
            {questionBank[0].options.map((option)=>(
                <button className={"option" + (selectedAnswer === option ? "selected" : "")} onClick={()=> handleSelectOption(option)}>{option}</button>
            ))}

            {/* <p>Option Selected: {optionSelected} </p> */}

            {/* <button className="option">London</button>
            <button className="option">Berlin</button>
            <button className="option">Cotonou</button>
            <button className="option">Azowlisse</button> */}

            <div className="nav-buttons">
                <button onClick={goToPrev} disabled ={currentQuestion === 0} >Previous</button>
                <button onClick={goToNext} disabled ={!selectedAnswer} >
                    {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
                </button>
            </div>
        </div>
    );
}

export default Quiz;
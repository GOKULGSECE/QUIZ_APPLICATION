import React, { useState, useEffect } from 'react';
import { data } from '../data';
import '../index.css';

const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [questions, setQuestions] = useState(data[index]);

    useEffect(() => {
        setQuestions(data[index]);
        setAnswered(false);
    }, [index]);

    const checkValidation = (e, answer) => {
        if (answered) return;
        setAnswered(true);

        if (questions.answer === answer) {
            e.target.classList.add("correct");
        } else {
            e.target.classList.add("incorrect");
        }
    };

    const incrementValue = () => {
        if (index < data.length - 1) {
            setIndex(index + 1);
        }
    };

    const decrementValue = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const submitQuiz = () => {
        console.log("Quiz submitted");
    };

    return (
        <div className="quiz-page">
            <div className="quiz-container">
                <h2>{data[index].topic}</h2>
                <hr />
                <h3>{index + 1}. {questions.question}</h3>
                <ul>
                    {questions.options.map((option, optionIndex) => (
                        <li 
                            key={optionIndex} 
                            onClick={(e) => checkValidation(e, optionIndex)} 
                            className={answered ? "disabled" : ""}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
                <div className="buttons">
                    {index > 0 && <button onClick={decrementValue}>Previous</button>}
                    {index < data.length - 1 ? (
                        <button onClick={incrementValue}>Next</button>
                    ) : (
                        <button onClick={submitQuiz}>Submit</button>
                    )}
                </div>
                <div className="questions-indicator">{index + 1} of {data.length} questions attempted</div>
            </div>
        </div>
    );
};

export default Quiz;

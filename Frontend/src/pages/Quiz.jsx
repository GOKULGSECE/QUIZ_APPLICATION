import React, { useState } from 'react';
import { data } from '../data';
import '../index.css'

const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useState(data[index]);

    const checkValidation = (e, answer) => {
        if (questions.answer === answer) {
            e.target.classList.add("correct");
        } else {
            e.target.classList.add("incorrect");
        }
    };

    const incrementValue = () => {
        if (index < data.length - 1) {
            setIndex(index + 1);
            setQuestions(data[index + 1]);
        } else {
            console.log("Quiz ended");
        }
    };
    const decrementValue = () =>{
      if(index>0)
        {
          setIndex(index-1);
          setQuestions(data[index-1]);
          console.log(index);
        }
    }

    return (
        <div>
            <h2>{data.topic}</h2>
            <hr />
            <h3>{index + 1}. {questions.question}</h3>
            <ul>
                {questions.options.map((option, optionIndex) => (
                    <li key={optionIndex} onClick={(e) => checkValidation(e, optionIndex)}>
                        {option}
                    </li>
                ))}
            </ul>
            <button onClick={incrementValue}>Next</button>
            <button onClick={decrementValue}>Previous</button>
            <div>{index + 1} of {data.length} questions attempted</div>
        </div>
    );
};

export default Quiz;

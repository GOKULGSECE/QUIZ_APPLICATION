import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../stylesheet/QuizMain.css';
import { cardContext } from '../Context/cardContext';

const Quiz = () => {
  const location = useLocation();
  const { qTitle } = useContext(cardContext);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.post("http://localhost:5001/app/quiz/quizpage", { topic: qTitle });
        if (response.data.questions && response.data.questions.length > 0) {
          setQuestions(response.data.questions);
          setCurrentQuestion(response.data.questions[0]);
        } else {
          console.error("No questions received from the backend.");
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
        if (error.response) {
          // Server responded with a status code out of 2xx range
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          // Request was made but no response received
          console.error("Request data:", error.request);
        } else {
          // Something else caused the error
          console.error("Error message:", error.message);
        }
      }
    };

    fetchQuestions();
  }, [qTitle]);

  useEffect(() => {
    if (questions.length > 0 && questions[index]) {
      setCurrentQuestion(questions[index]);
      setAnswered(false);
    }
  }, [index, questions]);

  const incrementValue = () => {
    if (index < questions.length - 1) {
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

  const checkValidation = (e, optionIndex) => {
    setAnswered(true);
  };

  if (questions.length === 0) {
    return <div>No questions available for this topic: {qTitle}</div>;
  }

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <h2>{qTitle} Quiz</h2>
        <hr />
        <h3>{index + 1}. {currentQuestion.question}</h3>
        <ul>
          {currentQuestion.options && currentQuestion.options.map((option, optionIndex) => (
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
          {index < questions.length - 1 ? (
            <button onClick={incrementValue}>Next</button>
          ) : (
            <button onClick={submitQuiz}>Submit</button>
          )}
        </div>
        <div className="questions-indicator">{index + 1} of {questions.length} questions attempted</div>
      </div>
    </div>
  );
};

export default Quiz;

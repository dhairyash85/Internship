import React, { useState, useEffect } from 'react';
import Render from './components/Render';

const App = () => {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch quiz questions from the API
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=18');
        const data = await response.json();
        
        // Check for 'results' property in the response
        if (data.results && data.results.length > 0) {
          setQuestions(data.results);
        } else {
          console.error('Invalid data structure in quiz questions API response:', data);
        }
      } catch (error) {
        console.error('Error fetching quiz questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerSelected = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const resetQuiz = () => {
    setScore(0);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Quiz App</h1>
      {questions.map((q, index) => (
        <Render
          key={index}
          question={q.question}
          options={q.options}
          correctAnswer={q.correct_answer}
          onAnswerSelected={handleAnswerSelected}
        />
      ))}
      <div className="mt-4">
        <h3>Score: {score}</h3>
        <button className="btn btn-primary" onClick={resetQuiz}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default App;

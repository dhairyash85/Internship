// App.js
import React, { useState } from 'react';
import Question from './Question';

const Quiz = () => {
  const [score, setScore] = useState(0);

  const handleAnswerSelected = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const resetQuiz = () => {
    setScore(0);
  };

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Southern Ocean', 'Pacific Ocean'],
      correctAnswer: 'Pacific Ocean',
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Leo Tolstoy'],
      correctAnswer: 'William Shakespeare',
    },
    {
      question: 'What is the capital of Japan?',
      options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
      correctAnswer: 'Tokyo',
    },
    {
      question: 'Which element has the chemical symbol "O"?',
      options: ['Osmium', 'Oxygen', 'Gold', 'Lead'],
      correctAnswer: 'Oxygen',
    },
    {
      question: 'What is the currency of Brazil?',
      options: ['Peso', 'Real', 'Rupiah', 'Dollar'],
      correctAnswer: 'Real',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
      correctAnswer: 'Leonardo da Vinci',
    },
    {
      question: 'What is the tallest mountain in the world?',
      options: ['Kangchenjunga', 'Mount Everest', 'K2', 'Lhotse'],
      correctAnswer: 'Mount Everest',
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'South Korea', 'Japan', 'Vietnam'],
      correctAnswer: 'Japan',
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Question App</h1>
      {questions.map((q, index) => (
        <Question
          key={index}
          question={q.question}
          options={q.options}
          correctAnswer={q.correctAnswer}
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

export default Quiz;

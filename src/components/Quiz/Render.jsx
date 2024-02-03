// Quiz.js
import React, { useState } from "react";

const Quiz = ({ question, options, correctAnswer, onAnswerSelected }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleAnswerSubmit = () => {
    setShowFeedback(true);
    onAnswerSelected(selectedOption === correctAnswer);
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{question}</h5>
        <ul className="list-group">
          {options.map((option, index) => (
            <li key={index} className="list-group-item">
              <label className="form-check-label">
                <input
                  type="radio"
                  name="options"
                  value={option}
                  onChange={() => handleOptionSelect(option)}
                  className="form-check-input"
                  disabled={showFeedback}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        {showFeedback && (
          <div className="mt-3">
            {selectedOption === correctAnswer ? (
              <p className="text-success">Correct!</p>
            ) : (
              <p className="text-danger">
                Incorrect. The correct answer is {correctAnswer}.
              </p>
            )}
          </div>
        )}
        <button
          onClick={handleAnswerSubmit}
          className="btn btn-primary mt-3"
          disabled={!selectedOption || showFeedback}
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
};

export default Quiz;

import React from 'react';




const Result = ({ score, totalQuestions, nickname, handleReturn}) => {
  return (
    <div>
      <h2>Quiz Complete, {nickname}!</h2>
      <p>Your Score: {score}/{totalQuestions}</p>
      <button onClick={handleReturn}>Return to Landing Page</button>
    </div>
  );
};

export default Result;
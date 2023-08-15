import React, { useState } from 'react';
import Question from './components/questions';
import Result from './components/result';
import Scoreboard from './components/scoreboard';
import questions from './data/questions';




const App = () => {
  // State variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [nickname, setNickname] = useState('');
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [scoreboard, setScoreboard] = useState([]);



  // Function to handle user's answer selection
  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizComplete(true);
      addToScoreboard();
    }
  };

  // Function to handle nickname input change
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  // Function to return to the landing page
  const handleReturnToLandingPage = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizComplete(false);
    setShowLandingPage(true);
    setNickname('');
  };

  // Function to add user's score to the scoreboard
  const addToScoreboard = () => {
    const newEntry = { nickname, score };
    setScoreboard([...scoreboard, newEntry]);
  };

  // Render JSX
  return (
    <div className="landing-page">
      {/* Landing page */}
      {showLandingPage ? (
        <div class ="container">
          <div class="row">
            <div class ="col">
          <h1>Welcome to the Quiz App!</h1>
          <input type="text" placeholder="Enter your nickname"
           value={nickname} onChange={handleNicknameChange} />
           <div class="row">
          <button onClick={() => setShowLandingPage(false)}>Start Quiz</button>
          </div>
        </div>
        </div>
        </div>
      ) : (
        <div className="flex-container-results">
          {/* Quiz questions or result page */}
          {quizComplete ? (
            <div className="results">
              {/* Result page */}
              <Result score={score} totalQuestions={questions.length} nickname={nickname} handleReturn={handleReturnToLandingPage} />
              <div className="scoreboard">
              {/* Scoreboard */}
              <Scoreboard scoreboard={scoreboard} />
              </div>
              </div>
          ) : (
            <Question
              // Question component
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              handleAnswer={handleAnswer}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;

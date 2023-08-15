import React, { useState } from 'react';

const Question = ({ question, options, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAnswer(selectedOption);
    setSelectedOption('');
  };

  return (
    <div className='landing page'>
      <h2>{question}</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex-container">
          {options.map((option, index) => (
            <React.Fragment key={index}>
              <input
                type="radio"
                className="btn-check"
                name="vbtn-radio"
                id={`vbtn-radio${index + 1}`}
                value={option}
                checked={selectedOption === option}
                onChange={handleChange}
                autoComplete="off"
              />
              <label className="btn btn-success" htmlFor={`vbtn-radio${index + 1}`}>
                {option}
              </label>
            </React.Fragment>
          ))}


        <button type="submit" className="landing-page-button">Next</button>
        </div>
      </form>

    </div>
  );
};

export default Question;

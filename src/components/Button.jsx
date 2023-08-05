import React, { useState } from 'react';
import './Button.css';

const Button = ({ topic, options }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (value) => {
    setSelectedButton(value);
  };

  return (
    <div className='button-heading'>
      <h4>{topic}</h4>
      <div className="button-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`button ${selectedButton === option && 'selected'}`}
            onClick={() => handleButtonClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Button;

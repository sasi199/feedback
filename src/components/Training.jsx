import React, { useState } from 'react';
import './Training.css';
import { FaSadTear, FaMeh, FaSmile, FaGrin } from 'react-icons/fa';

const Training = () => {
  const [recommendation, setRecommendation] = useState(null);

  const handleRecommendationButtonClick = (value) => {
    setRecommendation(value);
  };

  return (
    <div>
      <div className='heading'>
        <h4>11. What aspects of the course (Training) could be improved?</h4>
        <div className="message-box">
          <textarea
            className="message-input"
            rows="4"
          ></textarea>
        </div>
      </div>

      <div className='heading'>
        <h4>12. Did the course meet your expectation? Please provide details.</h4>
        <div className="message-box">
          <textarea
            className="message-input"
            rows="4"
          ></textarea>
        </div>
      </div>

      <div className='heading'>
        <h4>13. How likely are you to recommend this course to others? 1(Not Likely) -5(Very Likely)</h4>
        <div className="button-container">
  <label className={`recommend-option ${recommendation === 'Not Likely' ? 'selected' : ''}`}>
    <input
      type="radio"
      name="recommendation"
      value="Not Likely"
      checked={recommendation === 'Not Likely'}
      onChange={() => handleRecommendationButtonClick('Not Likely')}
    />
    <FaSadTear className="emoji-icon" /> Not Likely
  </label>
  <label className={`recommend-option ${recommendation === 'Not Sure' ? 'selected' : ''}`}>
    <input
      type="radio"
      name="recommendation"
      value="Not Sure"
      checked={recommendation === 'Not Sure'}
      onChange={() => handleRecommendationButtonClick('Not Sure')}
    />
    <FaMeh className="emoji-icon" /> Not Sure
  </label>
  <label className={`recommend-option ${recommendation === 'Likely' ? 'selected' : ''}`}>
    <input
      type="radio"
      name="recommendation"
      value="Likely"
      checked={recommendation === 'Likely'}
      onChange={() => handleRecommendationButtonClick('Likely')}
    />
    <FaSmile className="emoji-icon" /> Likely
  </label>
  <label className={`recommend-option ${recommendation === 'Will Recommend' ? 'selected' : ''}`}>
    <input
      type="radio"
      name="recommendation"
      value="Will Recommend"
      checked={recommendation === 'Will Recommend'}
      onChange={() => handleRecommendationButtonClick('Will Recommend')}
    />
    <FaGrin className="emoji-icon" /> Will Recommend
  </label>
  <label className={`recommend-option ${recommendation === 'Highly Recommend' ? 'selected' : ''}`}>
    <input
      type="radio"
      name="recommendation"
      value="Highly Recommend"
      checked={recommendation === 'Highly Recommend'}
      onChange={() => handleRecommendationButtonClick('Highly Recommend')}
    />
    <FaSmile className="emoji-icon" /> I Will Highly Recommend
  </label>
</div>

      </div>

      <div className='heading'>
        <h4>14. Any additional comments or suggestions.</h4>
        <div className="message-box">
          <textarea
            className="message-input"
            rows="4"
            placeholder="Comments..."
          ></textarea>
        </div>
      </div>

      <p className='para'>
        Thank you for taking the time to complete this feedback form. Your feedback is highly appreciated and will help us enhance our future course offerings.
      </p>
    </div>
  );
}

export default Training;

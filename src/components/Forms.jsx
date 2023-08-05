import React, { useState } from 'react';
import './Forms.css';
import StarRating from './StarRating';
const Forms = () => {
    const topics = [
        '1. Overall satisfaction with the course:',
        "2. Instructor's knowledge and expertise:",
        '3. Clarity of course materials and resources:',
        '4. Relevance of the topics covered:',
        '5. Effectiveness of practical exercises and projects:',
        '6. Quality of the learning environment (online/offline):',
        '7. Availability of support and guidance:',
        '8. Communication and feedback from the instructor:',
        '9. How would you rate your overall learning experience? (1-5):',
      ];

     

  const instructorNames = ['Mrs. Geethara Gowri', 'Mr. Vimalesh', 'Ms. Lenora Smauel', 'Mr. Gajendra Babu'];
  const courseNames = ['Digital Marketing', 'Full Stack Web Development'];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [ratings, setRatings] = useState(Array(topics.length).fill(0));
  const [recommendation, setRecommendation] = useState(null); // State for recommendation

  const handleRatingChange = (index, value) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = value;
    setRatings(updatedRatings);
  };
 

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const courseName = event.target.courseName.value;
    const paperName = event.target.paperName.value;
    const selectedInstructor = event.target.instructor.value;
    const studentName = event.target.studentName.value;
    const batchNumber = event.target.batchNumber.value;
  

    if (!courseName || !paperName || !selectedInstructor || !studentName || !batchNumber ||  ratings.includes(0) || !recommendation) {
      setErrorMsg('Please fill out all the required fields and provide feedback for all topics.');
    } else {
      setErrorMsg('');
      setFormSubmitted(true);
      // Simulating a submission with an alert
      alert('Feedback submitted successfully!');
      event.target.reset();
      setFormSubmitted(false);
      setRecommendation(null);
    }
  };

  return (
    <div className="form-model">
      <form onSubmit={handleSubmit}>
        <table className="form-table">
          <tbody>
          <tr>
              <td className="form-label">Course Name:</td>
              <select name="courseName" className="form-select">
                                    <option value="">Select a course</option>
                                    {courseNames.map((course, index) => (
                                        <option key={index} value={course}>
                                            {course}
                                        </option>
                                    ))}
                                </select></tr>
            <tr>
              <td className="form-label">Paper Name:</td>
              <td><input type="text" name="paperName" className="form-input" /></td>
            </tr>
            <tr>
              <td className="form-label">Instructor Name:</td>
              <td>
                <select name="instructor" className="form-select">
                  <option value="">Select an instructor</option>
                  {instructorNames.map((name, index) => (
                    <option key={index} value={name}>{name}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td className="form-label">Student Name:</td>
              <td><input type="text" name="studentName" className="form-input" /></td>
            </tr>
            <tr>
              <td className="form-label">Batch Number:</td>
              <td><input type="text" name="batchNumber" className="form-input" /></td>
            </tr>
          </tbody>
        </table>

        {topics.map((topic, index) => (
                            <div className={`topic-container ${index === topics.length - 1 ? 'star-rating-bottom' : ''}`} key={index}>
                                <h4 className="heading-text">{topic}</h4>
                                <StarRating value={ratings[index]} onChange={(value) => handleRatingChange(index, value)} />
                            </div>
                        ))}

        <div className='heading'>
          <h4>10. What aspects of the course (Training) could be improved?</h4>
          <div className="message-box">
            <textarea
              className="message-input"
              rows="4"
            ></textarea>
          </div>
        </div>

        <div className='heading'>
          <h4>11. Did the course meet your expectation? Please provide details.</h4>
          <div className="message-box">
            <textarea
              className="message-input"
              rows="4"
            ></textarea>
          </div>
        </div>

        <div className='heading'>
          <h4>12. Any additional comments or suggestions.</h4>
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

        {errorMsg && <p className="error-message">{errorMsg}</p>}
        {formSubmitted && <p className="success-message">Feedback submitted successfully!</p>}

        <button type="submit" className="submit-button">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Forms;

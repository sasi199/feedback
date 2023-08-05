


import React, { useState } from 'react';
import './Form.css';
import Training from './Training';
import Button from './Button';
import FormComponent from './Form';

const Forms = () => {
 
    const topics = [
        '1. Overall satisfaction with the course:',
        "2. Instructor's knowledge and expertise:",
        '3. Clarity of course materials and resources:',
        '4. Relevance of the topics covered:',
        '5. Effectiveness of practical exercises and projects:',
        '6. Quality of the learning environment (online/offline):',
        '7. Availability of support and guidance:',
        '8. Organization and structure of the course:',
        '9. Communication and feedback from the instructor:',
        '10. How would you rate your overall learning experience? (1-5):',
      ];


  const options = ['Below Average', 'Average', 'Good', 'Very Good', 'Excellent'];

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default behavior of form submission

    // Check if the form is valid based on HTML5 validation
    if (!event.target.checkValidity()) {
      setFormSubmitted(true);
    } else {
      setFormSubmitted(false);
      alert('Feedback submitted successfully!');
      event.target.reset(); // Clear form fields
    }
  };

  return (
    <div className="form-model">
      <form onSubmit={handleSubmit}>
        {/* Include your FormComponent */}
        <FormComponent />

        {/* Map through topics and render Button components */}
        {topics.map((topic, index) => (
          <Button key={index} topic={topic} options={options} />
        ))}

        {/* Include your Training component */}
        <Training />

        {/* Display the warning message if formSubmitted is true */}
        {formSubmitted && (
          <p className="warning-message">Please fill out all fields before submitting.</p>
        )}

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Forms;


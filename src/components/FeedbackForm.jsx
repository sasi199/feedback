import React, { useState } from 'react';
import './Forms.css';
import StarRating from './StarRating';

const FeedbackForm = () => {
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

  const [formData, setFormData] = useState({
    courseName: '',
    selectedCourse: '',
    paperName: '',
    instructorName: '',
    studentName: '',
    batchNumber: '',
    ratings: Array(topics.length).fill(0), // Initial ratings array for topics
    courseExpectation: '',
    courseImprovement: '',
    additionalComments: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (index, value) => {
    const updatedRatings = [...formData.ratings];
    updatedRatings[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      ratings: updatedRatings,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        console.log('Feedback submitted successfully');
      } else {
        console.error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  const handleCourseSelect = (event) => {
    const selectedCourse = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      selectedCourse,
    }));
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Name:</label>
          <select
            name="selectedCourse"
            value={formData.selectedCourse}
            onChange={handleCourseSelect}
          >
            <option value="">Select a course</option>
            {courseNames.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Paper Name:</label>
          <input
            type="text"
            name="paperName"
            value={formData.paperName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Instructor Name:</label>
          <select
            name="instructorName"
            value={formData.instructorName}
            onChange={handleInputChange}
          ><option value="">Select an Instructor</option>
            {instructorNames.map((instructor) => (
              <option key={instructor} value={instructor}>
                {instructor}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Batch Number:</label>
          <input
            type="text"
            name="batchNumber"
            value={formData.batchNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        {topics.map((topic, index) => (
          <div className="topic-container" key={index}>
            <h4>{topic}</h4>
            <StarRating value={formData.ratings[index]} onChange={(value) => handleRatingChange(index, value)} />
          </div>
        ))}

        <div>
          <label>Did the course meet your expectation? Please provide details:</label>
          <textarea
            name="courseExpectation"
            value={formData.courseExpectation}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <label>What aspects of the course (Training) could be improved?</label>
          <textarea
            name="courseImprovement"
            value={formData.courseImprovement}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div>
          <label>Any additional comments or suggestions:</label>
          <textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="form-model">
    
      <table className="form-table">
        <tbody>
          <tr>
            <td className="form-label">Module Name:</td>
            <td><input type="text" className="form-input" /></td>
          </tr>
          <tr>
            <td className="form-label">Instructor Name:</td>
            <td><input type="text" className="form-input" /></td>
          </tr>
          <tr>
            <td className="form-label">Student Name:</td>
            <td><input type="text" className="form-input" /></td>
          </tr>
          <tr>
            <td className="form-label">Batch Number:</td>
            <td><input type="text" className="form-input" /></td>
          </tr>
        </tbody>
      </table>
     
    </div>
  );
};

export default Form;

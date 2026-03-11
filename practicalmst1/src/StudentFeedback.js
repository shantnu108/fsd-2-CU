import React, { useState } from "react";
import "./StudentFeedback.css";

function StudentFeedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: ""
  });
  
  const [submittedFeedback, setSubmittedFeedback] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.feedback) {
      alert("Please fill in all fields");
      return;
    }
    
    if (isEditing) {
      const updatedFeedback = [...submittedFeedback];
      updatedFeedback[editingIndex] = formData;
      setSubmittedFeedback(updatedFeedback);
      setIsEditing(false);
      setEditingIndex(-1);
    } else {
      setSubmittedFeedback([...submittedFeedback, formData]);
    }
    
    setFormData({
      name: "",
      email: "",
      feedback: ""
    });
  };

  const handleEdit = (index) => {
    setFormData(submittedFeedback[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedFeedback = submittedFeedback.filter((_, i) => i !== index);
    setSubmittedFeedback(updatedFeedback);
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      feedback: ""
    });
    setIsEditing(false);
    setEditingIndex(-1);
  };

  return (
    <div className="feedback-container">
      <h1>Student Feedback Form</h1>
      
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Student Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Enter your feedback"
            rows="4"
            required
          />
        </div>
        
        <div className="button-group">
          <button type="submit" className="submit-btn">
            {isEditing ? 'Update Feedback' : 'Submit Feedback'}
          </button>
          {isEditing && (
            <button type="button" onClick={handleCancel} className="cancel-btn">
              Cancel
            </button>
          )}
        </div>
      </form>
      
      {submittedFeedback.length > 0 && (
        <div className="feedback-list">
          <h2>Submitted Feedback ({submittedFeedback.length})</h2>
          {submittedFeedback.map((feedback, index) => (
            <div key={index} className="feedback-item">
              <div className="feedback-header">
                <h3>{feedback.name}</h3>
                <span className="email">{feedback.email}</span>
              </div>
              <p className="feedback-text">{feedback.feedback}</p>
              <div className="feedback-actions">
                <button onClick={() => handleEdit(index)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => handleDelete(index)} className="delete-btn">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentFeedback;
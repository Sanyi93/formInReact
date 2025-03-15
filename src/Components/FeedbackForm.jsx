import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    //event as a pramater represent the input interaction
    const handleChange = (event) => {

    //This line extracts the name and value properties from the event object's target property. 
    //The target property refers to the DOM element that triggered the event, which, in this case, is an input field. 
    //The name property corresponds to the 'name' attribute of the input field, while the value property represents 
    //the current 'value' entered by the user into the input field
        const {name, value} = event.target;
    //setFormData function is a state updater function provided by React's useState hook to update the state variable formData. 
    //It spreads the existing formData object and then updates the property specified by the 'name' variable with the new value. 
    //This pattern ensures that the state is updated immutably, meaning a new object is created with the updated property rather than modifying the existing state directly
        setFormData({
            ...formData,
            [name]: value
        });
    };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>

        <input
            type="text"
            name="name"
            placeholder="Your Name"
            />
        <input
            type="email"
            name="email"
            placeholder="Your Email"
            />
        <textarea
            name="feedback"
            placeholder="Your Feedback"
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;

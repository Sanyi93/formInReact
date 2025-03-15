import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: ''
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage= `
            Name: ${formData.name}
            Email: ${formData.email}
            Feedback: ${formData.feedback}
            Rating: ${formData.rating}
            `;

            //displaying a confirmation dialog with window.confirm() where the confirmationMessage created above is to be displayed
            //if the user confirms the detals, then "isConfirmed" equals true
        const isConfirmed = window.confirm(`Please confirm your details: \n\n${confirmationMessage}`);

        //checkin if the user confirms the details
        if(isConfirmed){
            console.log('Submitting feedback: ', formData);
            //the entered values will be reset after confirmation and submission
            setFormData({
                name: '',
                email: '',
                feedback: '',
                rating: ''
            });
            //alert message to be displayed after confirmation & submission
            alert('Thank you for your valuable feedback');
        }
    };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>

        <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            />
        <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            />
        <textarea
            name="feedback"
            placeholder="Your Feedback"
            value={formData.feedback}
            onChange={handleChange}
        ></textarea>
        <div style={{display: 'flex', gap: '10px', flexDirection: 'column'}}>
            <span>Rate Us:</span>
            <p><input
                    type= "radio"
                    name="rating"
                    value="1"
                    onChange={handleChange}
                    />
                    1
            </p>
            <p><input
                    type="radio"
                    name="rating"
                    value="2"
                    onChange={handleChange}
                    />
                    2
            </p>
            <p><input
                    type="radio"
                    name="rating"
                    value="3"
                    onChange={handleChange}
                    />
                    3
            </p>
            <p><input
                    type="radio"
                    name="rating"
                    value="4"
                    onChange={handleChange}
                    />
                    4
            </p>
            <p><input
                    type="radio"
                    name="rating"
                    value="5"
                    onChnage={handleChange}
                    />
                    5
            </p>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;

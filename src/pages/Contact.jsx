
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {

  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

    
    console.log('Contact form submitted:', formData);

    alert('Thank you for your message!');

    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
      message: ''
    });

    navigate('/');
  };

  return (
    <section
      id="contact"
      className="contact-section"
    >

      <h1>Contact Me</h1>

      <p>
        Thank you for visiting my portfolio!
        Feel free to contact me for questions,
        collaboration, or project opportunities.
      </p>

      <h2>Get in Touch</h2>

    
      <p>
        <strong>Email:</strong>
        {' '}rchowd53@my.centennialcollege.ca
      </p>

      <p>
        Please use the form below to send me a message.
      </p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <label htmlFor="firstName">
          First Name
        </label>

        <input
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">
          Last Name
        </label>

        <input
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="contactNumber">
          Contact Number
        </label>

        <input
          id="contactNumber"
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">
          Email Address
        </label>

        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;

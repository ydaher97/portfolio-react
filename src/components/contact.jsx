import React , { useState } from 'react'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };
  return (
    <section id='contact'>
      <div class="info-section">
        <h3>My Info</h3>
        <ul class="info-list">
          <li><strong>Name:</strong> Yazeed daher</li>
          <li><strong>Email:</strong> yazeeddaher@gmail.com</li>
          <li><strong>Location:</strong>akko, israel</li>
        </ul>
      </div>


      <div>
        <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
       
    </section>
  )
}

export default Contact
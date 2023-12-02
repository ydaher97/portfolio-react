import React , { useState ,useRef} from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {

    const formRef = useRef()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uuilma2', 'template_0f5xisc', formRef.current, 'WukvygmnOA_oEYtb7')
        .then((result) => {
          
          setSuccess(true);
          console.log(success)
        }, (error) => {
          setError(true);
          console.log(error)

        });
    };
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    //   });
    
    //   const handleChange = (e) => {
    //     setFormData({
    //       ...formData,
    //       [e.target.name]: e.target.value
    //     });
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form data:', formData);
        
    //     setFormData({
    //       name: '',
    //       email: '',
    //       message: ''
    //     });
    //     value={formData.message}
    //         onChange={handleChange}
    //   };
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
        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
        <h2>Contact Me</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
           
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            
            required
          ></textarea>
        </div>
        <button className='submit' type="submit">Submit</button>
        {error && "Error"}
        {success && "Success"}
      </form>
      </div>
       
    </section>
  )
}

export default Contact
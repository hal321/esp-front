import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.png'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'

const Contact = () => {


 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7b93e42e-0b09-43c4-82fd-2930223f3617");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={contact} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our students</p>
        <ul>
          <li><img src={email} alt="" />contact@esp.my.com</li>
          <li><img src={phone} alt="" />0100320033</li>
          <li><img src={location} alt="" />G residence, Desa pandan</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder='Enter your mobile number' required />
          <label>Write your message</label>
          <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
import React from 'react'
import './Contact.css'
import msg_icon from './../../assets/msg-icon.png'
import mail_icon from './../../assets/mail-icon.png'
import ph_icon from './../../assets/phone-icon.png'
import loc_icon from './../../assets/location-icon.png'
import next_icon from './../../assets/next-icon.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "491b4ae4-0bc1-4dde-8b8e-3b3d42ea3393");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
       <div className="contact-col">
         <h3>Send us a message <img src={msg_icon} alt="" />
         </h3>
         <p>Feel free to reach out through contact form or find our contact information below.
             Your feedback, questions, and suggestions are important to us
             as we strive to provide exceptional service to our university community.</p>
      
       <ul>
        <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
        <li><img src={ph_icon} alt="" />+1 123-456-7890</li>
        <li><img src={loc_icon} alt="" />77 Massachusetts Ave, Cambridge
           MA 02139, United States</li>
       </ul>
       </div>
       <div className="contact-col" >
        <form onSubmit={onSubmit}>
        <label>Your name</label>
        <input type="text" name="name" id="" placeholder='Enter your name' required/>
        <label>Phone Number</label>
        <input type="text" name="phone" id="" placeholder='Enter your mobile Number' required/>
        <label>Your Email</label>
        <input type="text" name="email" id="" placeholder='Enter your email Id' required />
        <label>Write your message here</label>
        <textarea name="message" rows="6" className='tarea' placeholder='Enter your message' required></textarea>
        <button type="submit" className='btn dark-btn'>Submit now <img src={next_icon} alt="" /></button>
        </form>
        <span>{result}</span>
       </div>
    </div>
  )
}

export default Contact

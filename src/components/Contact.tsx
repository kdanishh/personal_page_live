import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  // State for input values
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // State for errors
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    // 1. Validation Logic
    const isNameEmpty = name === '';
    const isEmailEmpty = email === '';
    const isMessageEmpty = message === '';

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty);
    setMessageError(isMessageEmpty);

    // 2. Transmission Logic
    if (!isNameEmpty && !isEmailEmpty && !isMessageEmpty) {
      const templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log("System: Initiating data packet transmission to template_fabyh6e...");

      emailjs.send(
        'service_c6egwvc',   // Your Service ID
        'template_fabyh6e',  // Your New Template ID
        templateParams,
        'c3Kb1BgLDZewGf9Wu'  // Your Public Key
      ).then(
        (response: any) => {
          console.log('SUCCESS!', response.status, response.text);
          alert("Thank you for reaching out. Your message has been successfully received, and I will get back to you as soon as possible - DK");
          
          // Clear form fields on success
          setName('');
          setEmail('');
          setMessage('');
        },
        (error: any) => {
          console.error('TRANSMISSION ERROR:', error);
          const errorMsg = error?.text || "Unknown technical fault";
          alert(`Transmission failed: ${errorMsg}. Please check your connection.`);
        }
      );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Seeking to push the boundaries of what autonomous systems can achieve. 
            I am open to research collaborations, joint ventures, and technical consultations. 
            Reach out and let’s start the conversation!
          </p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="name-input"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                variant="outlined"
              />
              <TextField
                required
                id="contact-input"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter contact information" : ""}
                variant="outlined"
              />
            </div>
            <TextField
              required
              id="message-input"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e: any) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              variant="outlined"
            />
            <Button 
              variant="contained" 
              endIcon={<SendIcon />} 
              onClick={sendEmail}
            >
              Send Message
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
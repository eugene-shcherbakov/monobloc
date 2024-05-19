import React, { useState, useRef } from 'react';

import { 
  Box,
  FormControl, 
} from '@mui/material';

import GreenButton from '../../ui/GreenButton';
import Label from '../../ui/Label';
import Input from '../../ui/Input';
import Textarea from '../../ui/Textarea';

import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const formRef = useRef();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_bgkrjp9', 'template_74k7h0b', formRef.current, 'qv-vaoURascMjGkz3')
      .then((result) => {
          console.log(result.text);
          
          alert("Your message has been sent.");
          window.location.reload();

      }, (error) => {

          console.log(error.text);
          alert("There was an error sending your message. Please try again.");
          // window.location.reload();
      });

  }

  return (
    <Box 
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        borderRadius: "10px",
        padding: "25px",
        border: "1px rgba(0, 0, 0, 0.1) solid",
        maxWidth: "600px",
      }}
      ref={formRef}
    >

      <Box sx={{
        display: 'flex',
        gap: '20px',
        width: '100%',
      }}>

        {/* First name */}
        <FormControl>
          <Label>First name</Label>
          <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} name={'first_name'} required/>
        </FormControl>

        {/* Last name */}
        <FormControl>
          <Label>Last name</Label>
          <Input value={lastName} onChange={(e) => setLastName(e.target.value)} name={'last_name'} required/>
        </FormControl>

      </Box>

      {/* Email */}
      <FormControl>
        <Label>Email</Label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} name={'email'} required/>
      </FormControl>

      {/* Message */}
      <FormControl>
        <Label>Message</Label>
        <Textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
          name={'message'}
        />
      </FormControl>
      
      <div class="g-recaptcha" data-sitekey="6Lcaj3wlAAAAAOV-l59VqCP7VtccGUbxTDYgAyfA"></div>

      {/* Submit button */}
      <GreenButton 
        type="submit"
        sx={{
          width: 'fit-content'
        }}
      >Submit</GreenButton>

    </Box>
  );
}

export default ContactForm;
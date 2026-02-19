import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5xsmu69', 'template_ofn426c', form.current, {
        publicKey: 'cYVymUse6I7KeKVU4',
      })
      .then(
        () => {
          alert('Message recieved!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Submission failed due to an error, please try again.')
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} id='email-form'>
        <input type='text' id='name' name='name' placeholder='Name' required></input>
        <input type='email' id='email' name='email' placeholder='Email' required></input>
        <textarea id='message' name='message' placeholder='Your Message...' required></textarea>
        <input type='submit' id='submit' value={"Send"}></input>
    </form>
  );
};
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const clearForm = () => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  }
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5xsmu69', 'template_ofn426c', form.current, {
        publicKey: 'cYVymUse6I7KeKVU4',
      })
      .then(
        () => {
          alert('Message recieved!');
          clearForm()
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Submission failed due to an error, please try again.')
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} id='email-form'>
        <input ref={nameRef} type='text' id='name' name='name' placeholder='Name' required></input>
        <input ref={emailRef} type='email' id='email' name='email' placeholder='Email' required></input>
        <textarea ref={messageRef} id='message' name='message' placeholder='Your Message...' required></textarea>
        <input type='submit' id='submit' value={"Send"}></input>
    </form>
  );
};
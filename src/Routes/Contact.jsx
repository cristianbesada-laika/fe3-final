import React from 'react';
import Form from '../Components/Form';

const Contact = () => {
  return (
    <div style={{display:"flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center"}}>
      <h2>Quieres saber más?</h2>
      <p style={{paddingBottom:"50px"}}>Envianos tus preguntas y nos pondremos en contacto</p>
      <Form/>
    </div>
  )
};

export default Contact;
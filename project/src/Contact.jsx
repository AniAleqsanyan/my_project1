import React, { Component } from 'react';
import './Contact.css';

const Contact = ({ image, name, surname }) => {
    const foo = () => {

    };
    
    return (
        <div className='contact'>
            <img src={image} />
            <p>{name} - {surname}</p>
        </div>
    )
}
export default Contact;
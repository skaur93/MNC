import React from 'react'
import contact from '../../assets/img/contactVid.mp4';
import './Contact.css'

function Contact() {
    return (
        <div class='contact' id='contact'>
            <video autoPlay muted loop id="myVideo">
                <source src={contact} type="video/mp4" />
            </video>
        </div>
    )
}

export default Contact

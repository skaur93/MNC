import React from 'react'
import contact from '../../assets/img/contactVid.mp4';
import './Contact.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function Contact() {
    return (
        <>
            <Header></Header>
            <div className='contact' id='contact' >
                <video autoPlay muted loop id="myVideo" className="video-container">
                    <source src={contact} type="video/mp4" />
                </video>
                <div className="video-banner" data-aos='flip-left'>
                    <div>We are located in Surrey, British columbia,</div>
                    <div>At 5926, 124st, V3X1X5</div>
                    <div className="call">Please call us for booking an appointment. Alternatively, you can drop us an email.</div>

                    <div>Email: manny@mnccpa.ca </div>
                    <div>Phone: 778-929-1480</div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Contact
